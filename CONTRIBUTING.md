# Contributing Guide

感谢你对 YYC3 Animation Robot 项目的关注！

## 开发环境

- Node.js >= 22（推荐使用 `.nvmrc` 中指定的版本）
- pnpm >= 10
- 仓库: <https://github.com/YYC-Cube/YYC3-Animation-Robot>

## 克隆仓库

```bash
git clone https://github.com/YYC-Cube/YYC3-Animation-Robot.git
cd YYC3-Animation-Robot
```

## 开发流程

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

访问 <http://localhost:3011>

### 3. 代码规范检查

```bash
pnpm lint
pnpm typecheck
```

### 4. 格式化代码

```bash
pnpm format
```

## 代码规范

### 命名约定

- 组件文件：kebab-case（如 `error-boundary.tsx`）
- 组件名称：PascalCase（如 `ErrorBoundary`）
- 工具函数：camelCase（如 `cn()`）
- CSS 变量：kebab-case（如 `--font-serif`）
- 环境变量：UPPER_SNAKE_CASE（如 `NEXT_PUBLIC_APP_NAME`）

### 项目结构约定

- `app/` — Next.js App Router 页面和布局
- `components/ui/` — shadcn/ui 基础组件（通过 CLI 管理）
- `components/` — 业务组件
- `hooks/` — 自定义 React Hooks
- `lib/` — 工具函数和共享逻辑
- `public/` — 静态资源

### 组件约定

- 使用 `"use client"` 标记客户端组件
- 使用 TypeScript 严格模式
- 使用 `cn()` 工具函数合并 Tailwind 类名
- Props 接口定义在组件文件顶部

### Git 提交规范

```text
feat: 新功能
fix: 修复 bug
docs: 文档变更
style: 代码格式（不影响功能）
refactor: 重构
perf: 性能优化
test: 测试
chore: 构建/工具变更
```

## 添加 shadcn/ui 组件

```bash
npx shadcn@latest add <component-name>
```

## 技术栈参考

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Spline](https://spline.design)
- [Framer Motion](https://motion.dev)
