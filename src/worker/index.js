// The only server-side code on fopermian.com.
//
// Everything else is static assets. This exists because the "Discuss Your
// Deployment" form has to post somewhere. Routing: wrangler.toml sets
// run_worker_first = ["/api/*"], so this runs only for the API path; every
// other request is served straight from static assets.
//
// Adapted from websitemachine/machine wm/deploy/worker.js (English copy, plus
// the "what do you need" field the client asked for).

const MAX = { name: 120, company: 160, email: 160, scale: 200, message: 2000 };
const NEEDS = { land: 'Powered Land', ppa: 'Power Purchase Agreement', space: 'White Space' };

const clean = (v, limit) => String(v ?? '').trim().slice(0, limit);
const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function back(request, status) {
  const url = new URL(request.url);
  url.pathname = '/';
  url.search = status;
  url.hash = 'contact';
  return Response.redirect(url.toString(), 303);
}

async function handleContact(request, env) {
  let form;
  try {
    const type = request.headers.get('content-type') || '';
    if (type.includes('application/json')) {
      form = await request.json();
    } else {
      const fd = await request.formData();
      form = Object.fromEntries(fd);
      form.need = fd.getAll('need');
    }
  } catch {
    return back(request, '?error=1');
  }

  // Honeypot: hidden from people, irresistible to bots. Accept and drop.
  if (clean(form.website, 200)) return back(request, '?ok=1');

  const name = clean(form.name, MAX.name);
  const company = clean(form.company, MAX.company);
  const email = clean(form.email, MAX.email);
  const scale = clean(form.scale, MAX.scale);
  const message = clean(form.message, MAX.message);
  const needs = (Array.isArray(form.need) ? form.need : [form.need])
    .map((k) => NEEDS[String(k)])
    .filter(Boolean);

  const looksLikeEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  if (!name || !looksLikeEmail) return back(request, '?error=1');

  const rows = [
    ['Name', name],
    ['Company', company],
    ['Email', email],
    ['Looking for', needs.join(', ')],
    ['Scale / timeline', scale],
    ['Message', message],
    ['Site', env.SITE_HOST || new URL(request.url).host],
    ['Received', new Date().toISOString()]
  ];
  const subject = `Deployment inquiry — ${needs.length ? needs.join(' / ') : 'unspecified'} — ${company || name}`;
  const html =
    `<h2>${escapeHtml(subject)}</h2><table>` +
    rows.map(([k, v]) => `<tr><td><b>${escapeHtml(k)}</b></td><td>${escapeHtml(v || '—')}</td></tr>`).join('') +
    '</table>';
  const text = rows.map(([k, v]) => `${k}: ${v || '—'}`).join('\n');

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: env.LEAD_FROM, to: [env.LEAD_INBOX], reply_to: email, subject, html, text }),
      signal: AbortSignal.timeout(10000)
    });
    if (!res.ok) {
      console.log('resend failed', res.status, await res.text().catch(() => ''));
      return back(request, '?error=1');
    }
  } catch {
    console.log('resend request failed');
    return back(request, '?error=1');
  }
  return back(request, '?ok=1');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      }
      if (!env.RESEND_API_KEY || !env.LEAD_INBOX || !env.LEAD_FROM) {
        console.log('contact form not configured');
        return back(request, '?error=1');
      }
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  }
};
