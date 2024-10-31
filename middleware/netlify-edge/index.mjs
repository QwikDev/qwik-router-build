// packages/qwik-router/src/middleware/netlify-edge/index.ts
import { getNotFound } from "@qwik-router-not-found-paths";
import { isStaticPath } from "@qwik-router-static-paths";
import { _deserialize, _serialize, _verifySerializable } from "@qwik.dev/core/internal";
import { setServerPlatform } from "@qwik.dev/core/server";
import { mergeHeadersCookies, requestHandler } from "../request-handler/index.mjs";
function createQwikRouter(opts) {
  if (opts.qwikCityPlan && !opts.qwikRouterConfig) {
    console.warn("qwikCityPlan is deprecated. Use qwikRouterConfig instead.");
    opts.qwikRouterConfig = opts.qwikCityPlan;
  } else if (!opts.qwikRouterConfig) {
    throw new Error("qwikRouterConfig is required.");
  }
  const qwikSerializer = {
    _deserialize,
    _serialize,
    _verifySerializable
  };
  if (opts.manifest) {
    setServerPlatform(opts.manifest);
  }
  async function onNetlifyEdgeRequest(request, context) {
    try {
      const url = new URL(request.url);
      if (isStaticPath(request.method, url) || url.pathname.startsWith("/.netlify")) {
        return context.next();
      }
      const serverRequestEv = {
        mode: "server",
        locale: void 0,
        url,
        env: Deno.env,
        request,
        getWritableStream: (status, headers, cookies, resolve) => {
          const { readable, writable } = new TransformStream();
          const response = new Response(readable, {
            status,
            headers: mergeHeadersCookies(headers, cookies)
          });
          resolve(response);
          return writable;
        },
        getClientConn: () => {
          var _a;
          return {
            ip: context.ip,
            country: (_a = context.geo.country) == null ? void 0 : _a.code
          };
        },
        platform: context
      };
      const handledResponse = await requestHandler(serverRequestEv, opts, qwikSerializer);
      if (handledResponse) {
        handledResponse.completion.then((v) => {
          if (v) {
            console.error(v);
          }
        });
        const response = await handledResponse.response;
        if (response) {
          return response;
        }
      }
      const notFoundHtml = isStaticPath(request.method || "GET", url) ? "Not Found" : getNotFound(url.pathname);
      return new Response(notFoundHtml, {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8", "X-Not-Found": url.pathname }
      });
    } catch (e) {
      console.error(e);
      return new Response(String(e || "Error"), {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8", "X-Error": "netlify-edge" }
      });
    }
  }
  return onNetlifyEdgeRequest;
}
var createQwikCity = createQwikRouter;
export {
  createQwikCity,
  createQwikRouter
};
