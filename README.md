# vite-plugin-api-data-mock

vite 插件，用于 mock api

## 安装

```bash
npm install vite-plugin-api-data-mock -D
yarn add vite-plugin-api-data-mock -D
pnpm add vite-plugin-api-data-mock -D
```

## 插件配置

```js
import { defineConfig } from 'vite';
import { viteMockPlugin } from 'vite-plugin-api-data-mock';

export default defineConfig({
  plugins: [
    viteMockPlugin({
      mockPath: 'mock',
      enable: true,
    }),
  ],
});
```

**默认值**:

- `mockPath`: `mock`
- `enable`: `true`

## mock 示例

```js
// ./mock/users.ts
export default {
  '/api/list': [
    {
      id: 1,
      name: 'David',
    },
  ],
  'GET /api/user': {
    id: 1,
    name: 'david',
  },
  'POST /api/login': (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('post user');
  },
};
```

## 插件开发

- 开发环境测试 ./plugin
- 生产环境测试 ./dist

### tsup 插件打包

- **`tsup.config.ts`**: 指定了入口文件、输出格式、外部依赖以及要使用的 `tsconfig`。

- **更新 `package.json`**:

  - 添加了 `build:plugin` 脚本来运行 `tsup`。
  - 设置了 `main`, `module`, `types`, 和 `exports` 字段，以便插件可以被其他项目正确地导入。
  - 添加了 `files` 字段来指定发布到 npm 时应包含的文件。

- **调试打包问题**: 指定正确的 `tsconfig.node.json` 解决了类型声明文件生成失败的问题。

### picocolors

使用 `picocolors` 来为日志添加颜色。

### bundle-require

loads the config file regardless what module format it is.

Bundle your file with **esbuild**

### chokidar

```js
const watcher = chokidar.watch('file, dir, or array', {
  ignored: (path, stats) => stats?.isFile() && !path.endsWith('.js'), // only watch js files
  persistent: true,
});

await watcher.close().then(() => console.log('closed'));
```
