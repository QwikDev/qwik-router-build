// packages/qwik-router/src/middleware/firebase/index.ts
import { createQwikRouter as createQwikRouterNode } from "@qwik.dev/router/middleware/node";
function createQwikRouter(opts) {
  if (opts.qwikCityPlan && !opts.qwikRouterConfig) {
    console.warn("qwikCityPlan is deprecated. Use qwikRouterConfig instead.");
    opts.qwikRouterConfig = opts.qwikCityPlan;
  } else if (!opts.qwikRouterConfig) {
    throw new Error("qwikRouterConfig is required.");
  }
  const { staticFile, notFound, router } = createQwikRouterNode({
    render: opts.render,
    manifest: opts.manifest,
    qwikRouterConfig: opts.qwikRouterConfig,
    static: {
      cacheControl: "public, max-age=31557600"
    },
    getOrigin(req) {
      if (process.env.IS_OFFLINE) {
        return `http://${req.headers.host}`;
      }
      return null;
    }
  });
  const qwikApp = (req, res) => {
    return staticFile(req, res, () => {
      router(req, res, () => notFound(req, res, () => {
      }));
    });
  };
  return qwikApp;
}
var createQwikCity = createQwikRouter;
export {
  createQwikCity,
  createQwikRouter
};
