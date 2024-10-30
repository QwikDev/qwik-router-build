import { ServerAdapterOptions } from '../../shared/vite';
import type { StaticGenerateRenderOptions } from '@qwik.dev/router/static';

/** @beta */
export declare function nodeServerAdapter(opts?: NodeServerAdapterOptions): any;

/** @beta */
export declare interface NodeServerAdapterOptions extends ServerAdapterOptions {
    name?: string;
}

export { StaticGenerateRenderOptions }

export { }
