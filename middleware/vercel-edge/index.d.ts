import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterVercelEdgeOptions): (request: Request) => Promise<Response>;

/** @public */
export declare interface PlatformVercel {
}

/**
 * @deprecated Use `QwikRouterVercelEdgeOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityVercelEdgeOptions = QwikRouterVercelEdgeOptions;

/** @public */
export declare interface QwikRouterVercelEdgeOptions extends ServerRenderOptions {
}

export { }
