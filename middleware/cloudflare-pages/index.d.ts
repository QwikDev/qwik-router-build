import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterCloudflarePagesOptions): (request: PlatformCloudflarePages['request'], env: PlatformCloudflarePages['env'] & {
    ASSETS: {
        fetch: (req: Request) => Response;
    };
}, ctx: PlatformCloudflarePages['ctx']) => Promise<Response>;

/** @public */
export declare interface PlatformCloudflarePages {
    request: Request;
    env?: Record<string, any>;
    ctx: {
        waitUntil: (promise: Promise<any>) => void;
    };
}

/**
 * @deprecated Use `QwikRouterCloudflarePagesOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityCloudflarePagesOptions = QwikRouterCloudflarePagesOptions;

/** @public */
export declare interface QwikRouterCloudflarePagesOptions extends ServerRenderOptions {
}

export { }
