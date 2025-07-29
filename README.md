# vite-plugin-mock-api

vite 插件，用于 mock api

## 安装

```bash
npm install vite-plugin-mock-api -D
```

## 插件开发

- 开发环境测试 ./plugin
- 生产环境测试 ./dist

## tsup 插件打包

- **安装 `tsup`**: 我们将 `tsup` 添加为项目的开发依赖。

- **创建 `tsup.config.ts`**: 我们创建了一个配置文件，指定了入口文件、输出格式、外部依赖以及要使用的 `tsconfig`。

- **更新 `package.json`**:

  - 添加了 `build:plugin` 脚本来运行 `tsup`。
  - 设置了 `main`, `module`, `types`, 和 `exports` 字段，以便你的插件可以被其他项目正确地导入。
  - 添加了 `files` 字段来指定发布到 npm 时应包含的文件。

- **调试打包问题**: 我们通过指定正确的 `tsconfig.node.json` 解决了类型声明文件生成失败的问题。

## picocolors

- 我们使用 `picocolors` 来为日志添加颜色。
