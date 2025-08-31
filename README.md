# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# Next.js Project

## 项目说明

这是一个使用 Next.js 构建的项目，支持 SCSS 和 Tailwind CSS。

## 依赖下载

使用 pnpm 安装依赖：

```bash
pnpm install
```

## 开发服务启动

启动开发服务器：

```bash
pnpm dev
```

## 生产服务部署

构建生产版本：

```bash
pnpm build
```

启动生产服务：

```bash
pnpm start
```

## 文件说明

- `src/styles/sections.scss`: SCSS 样式文件
- `src/components/sections.tsx`: 组件文件
- `next.config.cjs`: Next.js 配置文件
- `tailwind.config.js`: Tailwind CSS 配置文件
- `postcss.config.js`: PostCSS 配置文件

## 忽略文件

以下文件或目录在提交时会被忽略：

- `node_modules/`
- `.next/`
- `dist/`
- `dist-ssr/`
- `*.local`
- `.vscode/*` (除了 `extensions.json`)
- `.idea/`
- `.DS_Store`
- `*.suo`
- `*.ntvs*`
- `*.njsproj`
- `*.sln`
- `*.sw?`

# test 205071501# yunda-front-deprecated
