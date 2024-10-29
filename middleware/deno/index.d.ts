import type { ClientConn } from '@qwik.dev/router/middleware/request-handler';
import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterDenoOptions): {
    router: (request: Request, info: ServeHandlerInfo) => Promise<Response | null>;
    notFound: (request: Request) => Promise<Response>;
    staticFile: (request: Request) => Promise<Response | null>;
};

/** @public */
export declare interface NetAddr {
    transport: 'tcp' | 'udp';
    hostname: string;
    port: number;
}

/**
 * @deprecated Use `QwikRouterDenoOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityDenoOptions = QwikRouterDenoOptions;

/** @public */
export declare interface QwikRouterDenoOptions extends ServerRenderOptions {
    /** Options for serving static files */
    static?: {
        /** The root folder for statics files. Defaults to /dist */
        root?: string;
        /** Set the Cache-Control header for all static files */
        cacheControl?: string;
    };
    getClientConn?: (request: Request, info: ServeHandlerInfo) => ClientConn;
}

/** @public */
export declare interface ServeHandlerInfo {
    remoteAddr: NetAddr;
}

export { }
