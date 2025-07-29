import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteMockPlugin } from './plugin';

console.log('test vite mock plugin');

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), viteMockPlugin()],
});
