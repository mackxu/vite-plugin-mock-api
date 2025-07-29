import type { IncomingMessage, ServerResponse } from 'node:http';

export interface MockPluginOptions {
  enable?: boolean;
  mockPath?: string;
}

export type MockResponse = Record<string, any> | ((req: IncomingMessage, res: ServerResponse) => void);
