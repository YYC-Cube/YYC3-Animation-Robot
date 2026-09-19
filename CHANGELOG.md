# Changelog

All notable changes to this project will be documented in this file.

## [0.2.0] - 2026-09-20

### Added

- 添加远程仓库地址: `https://github.com/YYC-Cube/YYC3-Animation-Robot.git`
- package.json 新增 `repository` 与 `engines` (node >=22, pnpm >=10) 字段
- 补全 ESLint 工具链: `eslint` + `eslint-config-next` + `@eslint/eslintrc` 纳入 devDependencies (修复 lint 脚本此前实际不可运行的问题)
- 新增 `pnpm-workspace.yaml`: `allowBuilds` 构建脚本白名单 (sharp: true, unrs-resolver: false)
- ESLint flat config 补全忽略规则 (`.next/`、`next-env.d.ts` 等构建产物)
- README 新增 14 项 shields.io 徽章体系 (版本/技术栈/质量门禁/许可)

### Changed

- 依赖升级 (pnpm update, semver 范围内刷新):
  - next 15.5.18 → 15.5.25
  - react / react-dom 19.2.6 → 19.3.0
  - radix-ui 1.4.3 → 1.6.7
  - framer-motion 12.38.0 → 12.43.0
  - tailwindcss 4.2.4 → 4.3.3 (含 @tailwindcss/postcss)
  - @base-ui/react 1.4.1 → 1.8.0
  - react-hook-form 7.75.0 → 7.88.0
  - react-resizable-panels 4.11.1 → 4.12.4
  - @vercel/analytics 1.3.1 → 1.6.1
  - @types/react / @types/react-dom → 19.3.0, prettier → 3.9.8, postcss → 8.5.28
- 版本号 0.1.0 → 0.2.0

### Removed

- 移除 28 个 `@radix-ui/react-*` 冗余分包 (代码已全面使用 `radix-ui` 统一包)
- 移除未使用依赖: `date-fns`、`@hookform/resolvers`、`@emotion/is-prop-valid` (无任何直接引用)
- 移除 button.tsx 中最后一处 `@radix-ui/react-slot` 旧分包引用 (迁移至 `radix-ui` 的 `Slot.Root`)
- 清理 toast.tsx 中的 `any` 类型 (eslint no-explicit-any 归零)

### Fixed

- 修复 `pnpm lint` 因 eslint 未声明而不可运行的问题 (门禁首次真实可执行)
- 修复 unrs-resolver 构建脚本告警 (pnpm 11 `allowBuilds` 显式声明)

### Security

- 依赖树精简: 55 → 25 项直接依赖, 供应链攻击面收敛
- pnpm 供应链策略校验通过 (315 entries)

## [0.1.0] - 2026-05-08

### Added

- 初始化项目：基于 Next.js 15 + React 19 + Spline 3D 的动画交互机器人
- 集成 Spline 3D 场景渲染 (@splinetool/react-spline)
- 集成 Framer Motion 动画引擎
- 集成 Spotlight 鼠标跟随光效组件
- 集成 shadcn/ui 组件库 (new-york 风格, 58 个组件)
- 集成 Radix UI 基础组件
- 集成 next-themes 主题切换 (light/dark/system)
- 集成 Vercel Analytics
- 添加 Error Boundary 包裹 Spline 3D 组件
- 添加 ThemeProvider 到根布局
- 所有字体通过 next/font 本地加载 (Geist, Playfair Display, EB Garamond)
- 配置开发服务器端口 3011
- 配置 ESLint (flat config)
- 配置 EditorConfig
- 配置 Prettier
- 配置 .nvmrc (Node 22)
- 配置 .env.example 环境变量模板

### Changed

- Next.js 15.2.4 → 15.5.18 (修复 CVE-2025-66478)
- vaul 0.9.9 → 1.1.2 (React 19 兼容)
- 固定 @emotion/is-prop-valid → 1.4.0
- 固定 @splinetool/react-spline → 4.1.0
- 固定 @splinetool/runtime → 1.12.92
- 固定 framer-motion → 12.38.0
- 移除 next.config.mjs 中的 ignoreBuildErrors (启用严格类型检查)
- 移除 CSS @import Google Fonts (改用 next/font 本地加载)
- 迁移 app/globals.css 从 Tailwind v3 语法到 v4 (oklch 色彩空间)
- 项目名称统一为 yyc3-animation-robot
- Metadata 更新为中文描述
- html lang 从 en 修正为 zh-CN

### Removed

- 移除 styles/globals.css 重复文件
