// Cloudflare Worker — CORS-proxy för CupManager API
// Driftsätt på https://workers.cloudflare.com (gratis)
//
// 1. Skapa konto på cloudflare.com
// 2. Workers & Pages → Create → skapa ett nytt Worker
// 3. Klistra in denna kod → Deploy
// 4. Kopiera worker-URL:en (t.ex. https://kvarnby-proxy.your-name.workers.dev)
// 5. Lägg till den i matches.js som: proxy: "https://kvarnby-proxy.your-name.workers.dev"

const ALLOWED_HOSTS = ['cupmanager.net', 'basketballfestival.se', 'cph-invitational.dk'];

export default {
  async fetch(req) {
    // CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
        }
      });
    }

    const url = new URL(req.url);
    const targetStr = url.searchParams.get('url');
    if (!targetStr) return new Response('Saknar url-parameter', { status: 400 });

    let target;
    try { target = new URL(decodeURIComponent(targetStr)); }
    catch { return new Response('Ogiltig url', { status: 400 }); }

    if (!ALLOWED_HOSTS.some(h => target.hostname.endsWith(h))) {
      return new Response('Ej tillåten domän', { status: 403 });
    }

    const resp = await fetch(target.toString());
    const body = await resp.text();

    return new Response(body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
      }
    });
  }
};
