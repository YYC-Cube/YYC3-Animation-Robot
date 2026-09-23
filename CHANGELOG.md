# Changelog

All notable changes to this project will be documented in this file.

## [0.4.0] - 2026-09-24

### Added

- **`@yyc3/ui` workspace 包化** (monorepo 组件库):
  - 新增 `packages/ui/`，59 个 shadcn/ui 组件 + `lib/utils` + `hooks/use-mobile` 迁入包内，源码直出形态 (Turbopack 直接编译，无 build 产物)
  - `pnpm-workspace.yaml` 声明 `packages/*`，主应用以 `workspace:*` 协议消费
  - `next.config.mjs` 启用 `transpilePackages`; `tsconfig.json` 增加 `@yyc3/ui/*` 路径映射
  - Tailwind v4 以 `@source '../packages/ui/src'` 扫描 workspace 包类名
  - `components.json` aliases 对齐包路径 (shadcn CLI 保持可用)
- **测试基线**:
  - vitest 5 + @testing-library/react + jsdom 单测基线 (6 用例: cn 合并/冲突策略 + Button 变体渲染)
  - Playwright e2e 冒烟基线 (2 用例: 首页品牌渲染 + favicon/manifest 注入)，webServer 自管理 (`next start -p 3011`)
  - 覆盖率门禁 (v8 provider，lines/functions ≥ 60%)
  - 新增脚本: `test` / `test:watch` / `test:coverage` / `test:e2e`
- **部署闭环**:
  - `vercel.json` (framework/install/build 命令 + manifest 与图标资源的 Cache-Control 头)
  - `.github/workflows/deploy.yml` Vercel 生产部署 (secrets 软门控: 配置 VERCEL_TOKEN/ORG_ID/PROJECT_ID 后自动生效)

### Changed

- **接入 Next.js 16 `cacheComponents`** (Cache Components/PPR): 首页全静态预渲染 (3/3) 验证通过，为后续动态内容分段缓存奠定基础
- CI 升级为五连门禁: Typecheck / Lint / Build / Unit tests / E2e smoke (含 Playwright chromium 安装步骤)
- ESLint vendored 组件降级规则路径对齐 `packages/ui/src/components/**` (包化后路径迁移)
- 版本号 0.3.0 → 0.4.0 (`@yyc3/ui` 同步 0.4.0)

### Fixed

- 修复 package.json 测试脚本丢失导致的 `pnpm test` 静默失败

## [0.3.0] - 2026-09-20

### Changed

- **Next.js 15.5.25 → 16.3.5 大版本升级**（官方升级指南逐项核对，未盲升）:
  - Turbopack 成为默认构建引擎（编译 398ms，较 webpack 提升显著）
  - 业务代码审计确认无 params/searchParams/cookies()/headers()/middleware 用法，async params 破坏性变更零影响
  - React 19.2 特性（View Transitions / useEffectEvent / Activity）随升级可用
- eslint-config-next 15.5.25 → 16.3.5: 16 起原生导出 flat config（`Linter.Config[]`），移除 FlatCompat 转换层与 `@eslint/eslintrc` 依赖
- react-hooks v6（Compiler 对齐）: `hooks/use-mobile.ts` 以 `useSyncExternalStore` 正统重写（消除 set-state-in-effect）；`components/ui/**`（vendored shadcn 组件）将 `set-state-in-effect`/`purity` 规则降级 warning 以保持上游同步能力
- packageManager pnpm 10.33.0 → 11.10.0（与本地安装及 store v11 对齐）
- 版本号 0.2.0 → 0.3.0

### Fixed

- 修复 CI pnpm/action-setup 版本检测（`packageManager` 字段与实际执行版本不一致）

### Security

- 对齐 Next.js 2026-08 安全通告（16.3.3+ 修复两枚 Critical），锁定 16.3.5
- 直接依赖 25 → 24 项（移除 @eslint/eslintrc）

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
