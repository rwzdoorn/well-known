export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/.well-known/apple-app-site-association") {
      // Fetch the file from your origin
      const response = await fetch("https://runtrainer.com/.well-known/apple-app-site-association");
      // Copy headers and force the correct content-type
      return new Response(response.body, {
        status: response.status,
        headers: {
          ...Object.fromEntries(response.headers),
          "content-type": "application/json"
        }
      });
    }
    // For other paths, just forward the request as normal
    return fetch(request);
  }
};
