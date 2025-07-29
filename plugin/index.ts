import { type Plugin, type ResolvedConfig } from 'vite';
import type { MockPluginOptions } from './types';
import { closeWatcher, getMockMiddleware, mockServer } from './mockServer';

export const viteMockPlugin = (options: MockPluginOptions = {}): Plugin => {
  const opt = {
    enable: true,
    mockPath: 'mock',
    ...options,
  };
  let configResolved: ResolvedConfig;
  return {
    name: 'vite-mock-plugin',
    enforce: 'pre',
    configResolved: (resolvedConfig) => {
      configResolved = resolvedConfig;
    },
    configureServer: (server) => {
      if (!opt.enable) {
        return;
      }
      server.middlewares.use(getMockMiddleware(opt));
    },
    buildStart: () => {
      const isDev = configResolved.command === 'serve';
      if (isDev && opt.enable) {
        mockServer(opt);
      }
    },
    buildEnd: () => {
      closeWatcher();
    },
  };
};
