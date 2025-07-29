import { Plugin } from 'vite';

interface MockPluginOptions {
    enable?: boolean;
    mockPath?: string;
}

declare const viteMockPlugin: (options?: MockPluginOptions) => Plugin;

export { viteMockPlugin };
