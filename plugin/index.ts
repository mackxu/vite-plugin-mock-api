import { type Plugin } from 'vite';
import type { MockPluginOptions } from './types';
import { getMockMiddleware, mockServer } from './mockServer';

export const viteMockPlugin = (options: MockPluginOptions = {}): Plugin => {
  const opt = {
    enable: true,
    mockPath: 'mock',
    ...options,
  };
  return {
    name: 'vite-mock-plugin',
    enforce: 'pre',
    configResolved: (configResolved) => {
      const isDev = configResolved.command === 'serve';
      if (isDev) {
        mockServer(opt);
      }
    },
    configureServer: (server) => {
      if (!opt.enable) {
        return;
      }
      server.middlewares.use(getMockMiddleware(opt));
    },
  };
};
