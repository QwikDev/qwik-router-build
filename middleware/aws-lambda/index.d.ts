/// <reference types="node" />

import { Http2ServerRequest } from 'http2';
import { IncomingMessage } from 'http';
import { NodeRequestNextFunction } from '@qwik.dev/router/middleware/node';
import type { QwikCityPlan } from '@qwik.dev/router';
import type { QwikManifest } from '@qwik.dev/core/optimizer';
import type { QwikRouterConfig } from '@qwik.dev/router';
import type { Render } from '@qwik.dev/core/server';
import type { ServerRenderOptions } from '@qwik.dev/router/middleware/request-handler';
import { ServerResponse } from 'http';

declare interface AwsOpt {
    render: Render;
    manifest: QwikManifest;
    qwikRouterConfig: QwikRouterConfig;
    /** @deprecated Use `QwikRouterConfig` instead. Will be removed in V3 */
    qwikCityPlan?: QwikCityPlan;
}

/**
 * @deprecated Use `createQwikRouter` instead. Will be removed in V3
 * @public
 */
export declare const createQwikCity: typeof createQwikRouter;

/** @public */
export declare function createQwikRouter(opts: AwsOpt): {
    fixPath: (pathT: string) => string;
    router: (req: IncomingMessage | Http2ServerRequest, res: ServerResponse<IncomingMessage>, next: NodeRequestNextFunction) => Promise<void>;
    staticFile: (req: IncomingMessage | Http2ServerRequest, res: ServerResponse<IncomingMessage>, next: (e?: any) => void) => Promise<void>;
    notFound: (req: IncomingMessage | Http2ServerRequest, res: ServerResponse<IncomingMessage>, next: (e: any) => void) => Promise<void>;
    handle: (req: any, res: any) => void;
};

/** @public */
export declare interface PlatformAwsLambda extends Object {
}

/**
 * @deprecated Use `QwikRouterAwsLambdaOptions` instead. Will be removed in V3
 * @public
 */
export declare type QwikCityAwsLambdaOptions = QwikRouterAwsLambdaOptions;

/** @public */
export declare interface QwikRouterAwsLambdaOptions extends ServerRenderOptions {
}

export { }
