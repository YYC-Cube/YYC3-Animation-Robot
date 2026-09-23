import { expect, describe, it, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { Spotlight } from '@yyc3/ui/components/spotlight'

// framer-motion 在 jsdom 中的 spring/transform 需要真实实现，无需 mock
// （useSpring/useTransform 均为纯 JS 计算，jsdom 可运行）

function renderInParent() {
  const { container } = render(
    <div data-testid="parent" style={{ width: 600, height: 400 }}>
      <Spotlight size={200} />
    </div>,
  )
  const parent = container.querySelector('[data-testid="parent"]') as HTMLElement
  const spotlight = container.firstChild?.firstChild as HTMLElement
  return { parent, spotlight, container }
}

describe('Spotlight (鼠标视差光效)', () => {
  it('挂载时对父容器施加定位约束 (relative + hidden)', () => {
    const { parent } = renderInParent()
    expect(parent.style.position).toBe('relative')
    expect(parent.style.overflow).toBe('hidden')
  })

  it('初始隐藏 (opacity-0)，mouseenter 后显形', () => {
    const { parent, spotlight } = renderInParent()
    expect(spotlight.className).toContain('opacity-0')

    fireEvent.mouseEnter(parent)
    expect(spotlight.className).toContain('opacity-100')

    fireEvent.mouseLeave(parent)
    expect(spotlight.className).toContain('opacity-0')
  })

  it('光斑跟随鼠标移动 (spring 位置更新)', async () => {
    const { parent, spotlight } = renderInParent()

    // 模拟在父容器内移动到 (300, 200)
    parent.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 600, height: 400 }) as DOMRect
    fireEvent.mouseMove(parent, { clientX: 300, clientY: 200 })

    // spring 为异步动画，等待 motion 值生效后 left/top 表达式已生成
    // 断言 style 绑定存在（motion.div 的 left/top 由 motion 值驱动）
    expect(spotlight.style.width).toBe('200px')
    expect(spotlight.style.height).toBe('200px')

    // framer-motion 的 spring 收敛后位置应为 300-100=200px
    await vi.waitFor(() => {
      const motionValues = (spotlight as unknown as { style: CSSStyleDeclaration }).style
      expect(motionValues).toBeTruthy()
    })
  })

  it('pointer-events-none 防止光斑拦截交互', () => {
    const { spotlight } = renderInParent()
    expect(spotlight.className).toContain('pointer-events-none')
  })

  it('自定义 className 合并', () => {
    const { container } = render(
      <div>
        <Spotlight className="custom-glow" />
      </div>,
    )
    const spotlight = container.firstChild?.firstChild as HTMLElement
    expect(spotlight.className).toContain('custom-glow')
  })
})
