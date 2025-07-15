export default {
  async fetch(request, env, ctx) {
    if (request.url.endsWith("/.well-known/apple-app-site-association")) {
      const response = await fetch(request);
      return new Response(response.body, {
        status: response.status,
        headers: {
          ...Object.fromEntries(response.headers),
          "content-type": "application/json"
        }
      });
    }
    return fetch(request);
  }
}
