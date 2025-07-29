import { type Plugin } from 'vite';
import type { MockPluginOptions } from './types';
import { getMockMiddleware, mockServer } from './mockServer';

export const viteMockPlugin = ({ enable = true, mockPath = 'mock' }: MockPluginOptions = {}): Plugin => {
  return {
    name: 'vite-mock-plugin',
    enforce: 'pre',
    configResolved: (configResolved) => {
      const isDev = configResolved.command === 'serve';
      if (isDev) {
        mockServer({ enable, mockPath });
      }
    },
    configureServer: (server) => {
      if (!enable) {
        return;
      }
      server.middlewares.use(getMockMiddleware());
    },
  };
};
