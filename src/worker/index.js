// The only server-side code on fopermian.com.
//
// Everything else is static assets. Routing: wrangler.toml sets
// run_worker_first = ["/api/*"], so this runs only for the API path; every
// other request is served straight from static assets.
//
// The "Discuss Your Deployment" form was removed at the client's request on
// 2026-11-05 after a suspected compromise. The endpoint stays closed so old
// cached pages and bots posting directly get a clear refusal and no email is
// sent. Bring a form back only with CAPTCHA verification in front of delivery.

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith('/api/')) {
      return new Response('Gone', { status: 410, headers: { 'Cache-Control': 'no-store' } });
    }
    return env.ASSETS.fetch(request);
  }
};
