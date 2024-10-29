import type { ClientConn } from '@qwik.dev/router/middleware/request-handler';
import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterBunOptions): {
    router: (request: Request) => Promise<Response | null>;
    notFound: (request: Request) => Promise<Response>;
    staticFile: (request: Request) => Promise<Response | null>;
};

/**
 * @deprecated Use `QwikRouterBunOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityBunOptions = QwikRouterBunOptions;

/** @public */
export declare interface QwikRouterBunOptions extends ServerRenderOptions {
    /** Options for serving static files */
    static?: {
        /** The root folder for statics files. Defaults to /dist */
        root?: string;
        /** Set the Cache-Control header for all static files */
        cacheControl?: string;
    };
    getClientConn?: (request: Request) => ClientConn;
}

export { }
