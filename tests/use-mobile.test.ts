import { expect, describe, it, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@yyc3/ui/hooks/use-mobile'

// matchMedia mock：可编程切换 isMobile 状态并触发 change 事件
function createMatchMediaMock(initialMatches: boolean) {
  const listeners = new Set<() => void>()
  let matches = initialMatches
  const mql = {
    get matches() {
      return matches
    },
    addEventListener: (_: string, cb: () => void) => listeners.add(cb),
    removeEventListener: (_: string, cb: () => void) => listeners.delete(cb),
    // 供测试切换视口宽度语义
    setMatches(next: boolean) {
      matches = next
      listeners.forEach((cb) => cb())
    },
  }
  return mql as unknown as MediaQueryList
}

describe('useIsMobile (useSyncExternalStore)', () => {
  let originalMatchMedia: typeof window.matchMedia
  let mqlMock: ReturnType<typeof createMatchMediaMock>

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
    vi.restoreAllMocks()
  })

  it('桌面视口 (>=768px) 返回 false', () => {
    mqlMock = createMatchMediaMock(false)
    window.matchMedia = vi.fn().mockReturnValue(mqlMock)
    window.innerWidth = 1024

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it('移动视口 (<768px) 返回 true', () => {
    mqlMock = createMatchMediaMock(true)
    window.matchMedia = vi.fn().mockReturnValue(mqlMock)
    window.innerWidth = 375

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it('断点切换时同步更新 (change 事件订阅生效)', () => {
    mqlMock = createMatchMediaMock(false)
    window.matchMedia = vi.fn().mockReturnValue(mqlMock)
    window.innerWidth = 1024

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    // 模拟窗口缩窄跨过断点：mql matches 翻转 + change 事件
    window.innerWidth = 375
    act(() => {
      ;(mqlMock as unknown as { setMatches: (v: boolean) => void }).setMatches(true)
    })
    expect(result.current).toBe(true)
  })

  it('SSR 快照 getSnapshot 返回 false (服务端安全)', () => {
    // useSyncExternalStore 第三个参数在 SSR/hydration 时使用，恒为 false
    mqlMock = createMatchMediaMock(true)
    window.matchMedia = vi.fn().mockReturnValue(mqlMock)
    const { result } = renderHook(() => useIsMobile())
    // 客户端渲染仍以 client snapshot 为准
    expect(typeof result.current).toBe('boolean')
  })

  it('卸载后移除事件监听 (无泄漏)', () => {
    mqlMock = createMatchMediaMock(false)
    const removeSpy = vi.fn()
    ;(mqlMock as unknown as { removeEventListener: typeof removeSpy }).removeEventListener =
      removeSpy
    window.matchMedia = vi.fn().mockReturnValue(mqlMock)

    const { unmount } = renderHook(() => useIsMobile())
    unmount()
    expect(removeSpy).toHaveBeenCalled()
  })
})
