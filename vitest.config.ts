import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@yyc3/ui': path.resolve(__dirname, 'packages/ui/src'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      include: ['packages/ui/src/**', 'hooks/**', 'app/**', 'components/**'],
      exclude: ['packages/ui/src/components/**'],
      reporter: ['text', 'lcov'],
      thresholds: { lines: 60, functions: 60 },
    },
  },
})
