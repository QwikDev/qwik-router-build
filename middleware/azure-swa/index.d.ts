import type { AzureFunction } from '@azure/functions';
import type { Context } from '@azure/functions';
import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterAzureOptions): AzureFunction;

/** @public */
export declare interface PlatformAzure extends Partial<Context> {
}

/**
 * @deprecated Use `QwikRouterAzureOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityAzureOptions = QwikRouterAzureOptions;

/** @public */
export declare interface QwikRouterAzureOptions extends ServerRenderOptions {
}

export { }
