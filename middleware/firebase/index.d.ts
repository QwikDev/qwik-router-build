import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: QwikRouterFirebaseOptions): (req: any, res: any) => Promise<void>;

/** @public */
export declare interface PlatformFirebase extends Object {
}

/**
 * @deprecated Use `QwikRouterFirebaseOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityFirebaseOptions = QwikRouterFirebaseOptions;

/** @public */
export declare interface QwikRouterFirebaseOptions extends ServerRenderOptions {
}

export { }
