import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@qwik.dev/router/static';

/** @beta */
export declare function denoServerAdapter(opts?: DenoServerAdapterOptions): any;

/** @beta */
export declare interface DenoServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { StaticGenerateRenderOptions }

export { }
