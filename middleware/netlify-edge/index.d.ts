import type { Context } from '@netlify/edge-functions';
import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterNetlifyOptions): (request: Request, context: Context) => Promise<Response>;

/** @public */
export declare interface PlatformNetlify extends Partial<Omit<Context, 'next' | 'cookies'>> {
}

/**
 * @deprecated Use `QwikRouterNetlifyOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityNetlifyOptions = QwikRouterNetlifyOptions;

/** @public */
export declare interface QwikRouterNetlifyOptions extends ServerRenderOptions {
}

export { }
