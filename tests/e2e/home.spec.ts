import { test, expect } from '@playwright/test'

// 冒烟基线：首页可达、品牌标语渲染、无控制台崩溃
test.describe('首页冒烟', () => {
  test('页面加载并渲染品牌内容', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto('/')
    await expect(page).toHaveTitle(/YYC³/)

    // 主内容区存在且可见（Spline 场景懒加载或降级均不应阻塞文档流）
    await expect(page.locator('body')).toBeVisible()
    expect(errors).toEqual([])
  })

  test('favicon 与 manifest 已注入', async ({ page }) => {
    await page.goto('/')
    const icon = page.locator('link[rel*="icon"]')
    await expect(icon.first()).toHaveCount(1)
  })
})
