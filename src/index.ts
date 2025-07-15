export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/.well-known/apple-app-site-association") {
      const aasa = {
        applinks: {
          details: [
            {
              appIDs: [
                "Z8TVS94HS8.com.dreamix-studio.runtrainer"
              ],
              components: [
                // Matches anything like /password-reset/XYZ
                { "/": "/password-reset/*", "comment": "Matches /password-reset/* for OTP flow" },
                // Optional: Still support /deeplink= style for tests
                { "/": "/deeplink=*", "comment": "general deeplink" },
                // Optional: Root fallback
                { "/": "/", "comment": "Root path" }
              ]
            }
          ]
        },
        webcredentials: {
          apps: ["Z8TVS94HS8.com.dreamix-studio.runtrainer"]
        }
      };
      return new Response(JSON.stringify(aasa), {
        headers: { "content-type": "application/json" }
      });
    }
    return fetch(request);
  }
};
