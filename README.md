<div align="center">

<img src="./public/yyc3-Family.png" alt="YYC³ Animation Robot" width="1800" height="450" />

# YYC³ Animation Robot

[![Version](https://img.shields.io/badge/Version-0.4.1-6366f1?logo=semanticrelease&logoColor=white)](https://github.com/YYC-Cube/YYC3-Animation-Robot/blob/main/CHANGELOG.md)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/docs)
[![React](https://img.shields.io/badge/React-19.3-087ea4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9_strict-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/docs)
[![Spline 3D](https://img.shields.io/badge/Spline_3D-4.1-ff5c77?logo=spline&logoColor=white)](https://spline.design)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.43-e50e8a?logo=framer&logoColor=white)](https://motion.dev)
[![pnpm](https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)
[![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Type Check](https://img.shields.io/badge/TypeCheck-passing-brightgreen?logo=typescript&logoColor=white)](https://github.com/YYC-Cube/YYC3-Animation-Robot/actions)
[![Lint](https://img.shields.io/badge/Lint-0_errors-brightgreen?logo=eslint&logoColor=white)](https://github.com/YYC-Cube/YYC3-Animation-Robot/actions)
[![Build](https://img.shields.io/badge/Build-passing-brightgreen?logo=githubactions&logoColor=white)](https://github.com/YYC-Cube/YYC3-Animation-Robot/actions)
[![Tests](https://img.shields.io/badge/Tests-21+2_passing-brightgreen?logo=vitest&logoColor=white)](https://github.com/YYC-Cube/YYC3-Animation-Robot/actions)
[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-1a2b34?logo=prettier&logoColor=white)](https://prettier.io)
[![License](https://img.shields.io/badge/License-Private--YYC%C2%B3-8A2BE2)](https://github.com/YYC-Cube/YYC3-Animation-Robot)

> 言启千行代码，语枢万物智能
> Words Initiate Quadrants, Language Serves as Core for Future

`yyc3-animation-robot` — YanYuCloudCube™ (YYC³) 智能动画交互平台，基于 Next.js 16 + Spline 3D + Framer Motion 构建。承载品牌理念展示与技术栈验证的双重使命，是 YYC³ Family 智能应用体系的先导展示项目。

---

## 1. 项目概述

| 属性 | 值 |
| ---- | -- |
| 项目名称 | `yyc3-animation-robot` |
| 版本 | 0.4.1 |
| 仓库 | <https://github.com/YYC-Cube/YYC3-Animation-Robot> |
| 定位 | YYC³ Family 智能应用体系先导展示项目 |
| 核心能力 | Spline 3D 实时交互 · Spotlight 视差光效 · 主题感知 · 58 组件库 |
| 架构理念 | 五维驱动 → 五高（可用/性能/安全/扩展/智能） |
| 端口 | 开发/生产 3011 |
| 许可 | Private - YanYuCloudCube™ Team |

**核心使命**：

1. **品牌理念展示** — 承载「言启象限 · 语枢未来」品牌理念的首屏交互体验
2. **技术栈验证** — Next.js 16 + React 19 + Tailwind v4 + radix-ui 统一包的全链路落地验证
3. **模板输出** — `@yyc3/ui` workspace 包 (59 组件) 可供 YYC³ Family 项目直接复用

---

## 2. 技术栈

| 类别     | 技术                                       | 版本        |
| -------- | ------------------------------------------ | ----------- |
| 框架     | Next.js (App Router + cacheComponents)     | 16.3.5      |
| UI 库    | React                                      | 19.3        |
| 语言     | TypeScript (strict: true)                  | 5.9.3       |
| 样式     | Tailwind CSS v4 (oklch) + @yyc3/ui         | v4.3.3      |
| 组件库   | @yyc3/ui (workspace monorepo)              | 0.4.1       |
| 基础组件 | radix-ui (统一包) + @base-ui/react         | ^1.6.7      |
| 3D 引擎  | Spline (@splinetool/react-spline)          | 4.1.0       |
| 动画     | Framer Motion                              | 12.43.0     |
| 图标     | Lucide React                               | ^0.454.0    |
| 主题     | next-themes (light/dark/system)            | ^0.4.6      |
| 字体     | next/font (Geist / Playfair / EB Garamond) | 内置        |
| 测试     | vitest + @testing-library/react + Playwright | ^5.0 / ^1.63 |
| 包管理   | pnpm (workspace)                           | 11.10.0     |
| 运行时   | Node.js                                    | 22 (.nvmrc) |

---

## 3. 快速开始

### 3.1 环境要求

- Node.js >= 22 (推荐使用 `.nvmrc` 自动切换)
- pnpm >= 10.0.0

### 安装

```text
git clone https://github.com/YYC-Cube/YYC3-Animation-Robot.git
cd YYC3-Animation-Robot
pnpm install
cp .env.example .env.local
pnpm dev
```

访问 <http://localhost:3011>

### 可用脚本

| 命令                | 说明                       |
| ------------------- | -------------------------- |
| `pnpm dev`          | 启动开发服务器 (端口 3011) |
| `pnpm build`        | 构建生产版本               |
| `pnpm start`        | 启动生产服务器 (端口 3011) |
| `pnpm lint`         | 运行 ESLint 检查           |
| `pnpm typecheck`    | 运行 TypeScript 类型检查   |
| `pnpm test`         | 运行单元测试 (vitest)      |
| `pnpm test:watch`   | 单测监听模式               |
| `pnpm test:coverage`| 单测覆盖率报告             |
| `pnpm test:e2e`     | 运行 E2e 冒烟测试 (Playwright) |
| `pnpm format`       | 格式化代码 (Prettier)      |
| `pnpm format:check` | 检查代码格式               |

---

## 项目结构

```text
yyc3-animation-robot/
├── app/                        # Next.js App Router
│   ├── globals.css             # 全局样式 (Tailwind v4 + oklch + @source 包扫描)
│   ├── layout.tsx              # 根布局 (字体/主题/Analytics)
│   └── page.tsx                # 首页
├── components/
│   ├── error-boundary.tsx      # Spline 3D 错误边界
│   ├── new-yorker-spline.tsx   # 主页面组件 (Spotlight + Spline)
│   └── theme-provider.tsx      # 主题提供者 (next-themes)
├── packages/                   # pnpm workspace
│   └── ui/                     # @yyc3/ui 组件库 (0.4.1)
│       └── src/
│           ├── components/     # 59 个 shadcn/ui 组件 (源码直出)
│           ├── hooks/          # use-mobile
│           ├── lib/            # utils (cn)
│           └── index.ts        # 统一出口
├── hooks/                      # 自定义 Hooks
│   └── use-toast.ts            # Toast 通知
├── tests/                      # 测试基线
│   ├── utils.test.ts           # cn 单测
│   ├── button.test.tsx         # Button 单测
│   └── e2e/home.spec.ts        # Playwright 冒烟
├── public/                     # 静态资源
├── docs/                       # 项目文档 (审核报告/规划方案)
├── YYC3-团队通用-标准规范/      # YYC³ 团队规范 + 文档引擎
├── .github/workflows/          # CI 五连门禁 + Vercel Deploy
├── .editorconfig               # 编辑器配置 (UTF-8, LF, 2 spaces)
├── .env.example                # 环境变量模板
├── .gitignore                  # Git 忽略规则
├── .nvmrc                      # Node 版本锁定 (22)
├── .prettierrc                 # Prettier 配置
├── .prettierignore             # Prettier 忽略
├── components.json             # shadcn/ui 配置 (aliases → @yyc3/ui)
├── eslint.config.mjs           # ESLint 扁平配置
├── next.config.mjs             # Next.js 配置 (cacheComponents + transpilePackages)
├── package.json                # 项目依赖 (yyc3-animation-robot)
├── playwright.config.ts        # Playwright E2e 配置
├── pnpm-workspace.yaml         # workspace 声明 + 供应链策略
├── postcss.config.mjs          # PostCSS 配置
├── tsconfig.json               # TypeScript 严格模式 (@yyc3/ui/* 映射)
├── vitest.config.ts            # vitest 单测配置 (jsdom + 覆盖率)
├── CHANGELOG.md                # 变更日志
├── CONTRIBUTING.md             # 贡献指南
├── README.md                   # 项目说明
└── ROADMAP.md                  # 多端开发落地大纲
```

---

## 环境变量

| 变量                           | 说明               | 默认值                  |
| ------------------------------ | ------------------ | ----------------------- |
| `NEXT_PUBLIC_APP_NAME`         | 应用名称           | `yyc3-animation-robot`  |
| `NEXT_PUBLIC_APP_URL`          | 应用 URL           | `http://localhost:3011` |
| `NEXT_PUBLIC_SPLINE_SCENE_URL` | Spline 3D 场景 URL | -                       |

---

## 6. 组件库 (@yyc3/ui)

pnpm workspace 包 (`packages/ui/`)，基于 shadcn/ui (new-york 风格)，**59 个 UI 组件源码直出**（Turbopack 直接编译，无构建产物）：

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `button-group` `calendar` `card` `carousel` `chart` `checkbox` `collapsible` `combobox` `command` `context-menu` `dialog` `direction` `drawer` `dropdown-menu` `empty` `field` `form` `hover-card` `input` `input-group` `input-otp` `item` `kbd` `label` `menubar` `native-select` `navigation-menu` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `spinner` `switch` `table` `tabs` `textarea` `toggle` `toggle-group` `tooltip`

自定义组件：`spotlight` (鼠标视差光效) `splite` (Spline 3D 懒加载 + Error Boundary) `toast` (通知类型声明)

**消费方式**：

```ts
import { Button } from '@yyc3/ui/components/button'
import { cn } from '@yyc3/ui/lib/utils'
```

---

## 架构特性

### 高可用 (High Availability)

- Error Boundary 包裹 Spline 3D，加载失败时优雅降级
- Suspense 懒加载 + Loading Spinner，避免白屏
- 字体本地化 (next/font)，消除 CDN 依赖

### 高性能 (High Performance)

- **Cache Components (PPR) 已启用** — 首页全静态预渲染 (3/3)，为动态内容分段缓存奠基
- Turbopack 默认构建引擎 (Next.js 16)
- Spline 3D 场景按需加载 (lazy + Suspense)
- Tailwind CSS v4 按需构建 (oklch 色彩空间 + `@source` workspace 包扫描)
- radix-ui 统一包替代 @radix-ui/react-\* 分包 (冗余依赖已清理)
- react-resizable-panels v4 (API 升级)
- 依赖树精简: 55 → 24 项直接依赖 (供应链攻击面收敛)

### 高安全 (High Security)

- Next.js 16.3.5 (2026-08 安全通告两枚 Critical 已修复)
- TypeScript strict: true (ignoreBuildErrors 已移除)
- 依赖版本全部锁定 (无 latest)
- pnpm 供应链策略校验 (minimumReleaseAge + supply-chain policies)
- .env.local 不入库 (.gitignore)

### 7.4 高扩展 (High Scalability)

- `@yyc3/ui` workspace 组件包 (59 组件) — YYC³ Family 项目以 `workspace:*` 直接复用
- shadcn/ui CLI 按需扩展 (aliases 已对齐包路径)
- ThemeProvider 支持多主题
- 模块化组件架构 (packages/ui/src/)

### 高智能 (High Intelligence)

- 鼠标跟随视差光效 (Spotlight + Framer Motion)
- 动态主题感知 (system preference + next-themes)
- Spline 3D 场景实时交互

### 质量与交付 (Quality & Delivery)

- **测试基线**: vitest 单测 (jsdom + @testing-library/react) + Playwright E2e 冒烟，覆盖率门禁 lines/functions ≥ 60%
- **CI 五连门禁**: Typecheck / Lint / Build / Unit tests / E2e smoke (`.github/workflows/ci.yml`)

---

## 8. 图标与可视化体系

五平台图标资产（`public/yyc3-icons/`，32+ PNG）经 `app/layout.tsx` Metadata 全端注入，PWA 清单见 `public/manifest.json`。设计规范详见 [YYC3-图标可视化-体系设计](./docs/YYC3-团队规范-模版闭环/标规文档/YYC3-图标可视化-体系设计.md)。

---

## 9. 行业定位与趋势对齐

基于 2026 年行业大数据分析，本项目技术栈与以下趋势高度对齐：

1. **Next.js 16 + AI-Ready 架构** — Gartner 2026 报告指出 75% 企业级前端代码已由 AI 辅助生成，Next.js App Router 是 AI 集成的首选架构
2. **Spline 3D + Web 交互** — AI 3D 生成市场预计从 2024 年 $2.5B 增长到 2033 年 $15.1B (CAGR 23.3%)
3. **AI Agent 生态** — MCP (Model Context Protocol) 正成为 AI Agent 与工具连接的标准协议
4. **多端部署** — PWA + Electron + 移动端适配成为企业级应用的标配能力

---

## 许可证

Private - YanYuCloudCube™ Team

---

---

<div align="center">

> 「_**YanYuCloudCube**_」
> 「_**<admin@0379.email>**_」
> 「_**Words Initiate Quadrants, Language Serves as Core for the Future**_」
> 「_**All things converge in cloud pivot; Deep stacks ignite a new era of intelligence**_」

**© 2025-2026 YanYuCloudCube™. All Rights Reserved.**

</div>
