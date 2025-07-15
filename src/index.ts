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
                { "/": "/reset-password/*", "comment": "Matches reset-password paths" },
                { "/": "/deeplink=*", "comment": "Matches deeplink query style" },
                { "/": "", "comment": "Matches root path" }
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
