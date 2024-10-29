import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@qwik.dev/router/static';

/** @alpha */
export declare function denoServerAdapter(opts?: DenoServerAdapterOptions): any;

/** @alpha */
export declare interface DenoServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { StaticGenerateRenderOptions }

export { }
