export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/.well-known/apple-app-site-association") {
      const aasa = {
        applinks: {
          apps: [],
          details: [
            {
              appID: "Z8TVS94HS8.com.dreamix-studio.runtrainer",
              paths: [
                "/reset-password/*",
                "/deeplink=*",
                ""
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
