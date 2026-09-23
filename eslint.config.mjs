import nextConfig from 'eslint-config-next'

/**
 * YYC³ Animation Robot — ESLint flat config
 * eslint-config-next 16 起原生导出 flat config 数组（Linter.Config[]），无需 FlatCompat 转换。
 */
const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'pnpm-lock.yaml',
    ],
  },
  ...nextConfig,
  {
    // vendored shadcn/ui 组件：保持与上游模板一致以便同步升级，
    // react-hooks v6 Compiler 对齐规则（set-state-in-effect / purity）在上游适配前降级为 warning。
    files: ['packages/ui/src/components/**/*.tsx'],
    rules: {
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/purity': 'warn',
    },
  },
]

export default eslintConfig
