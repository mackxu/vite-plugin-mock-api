import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['plugin/index.ts'],
  format: ['cjs', 'esm'],
  external: ['vite'],
  tsconfig: './tsconfig.node.json',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
});
