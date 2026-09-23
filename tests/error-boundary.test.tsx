import { ErrorBoundary } from '@/components/error-boundary'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

// 显式清理：vitest 未加载 globals 时 afterEach 自动 cleanup 不生效
afterEach(cleanup)

// 模拟 Spline 场景加载失败：抛错的子组件
function Bomb({ message = 'Spline runtime crashed' }: { message?: string }): never {
  throw new Error(message)
}

// 静默 React 控制台错误，保持测试输出干净
vi.spyOn(console, 'error').mockImplementation(() => { })

describe('ErrorBoundary (Spline 3D 降级路径)', () => {
  it('正常子组件原样渲染', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>3D 场景正常</div>
      </ErrorBoundary>,
    )
    expect(getByText('3D 场景正常')).toBeTruthy()
  })

  it('子组件抛错时显示默认降级 UI（中文提示 + 重试按钮）', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>,
    )
    expect(getByText('3D 场景加载失败')).toBeTruthy()
    expect(getByText(/请检查网络连接后刷新页面/)).toBeTruthy()
    expect(getByText('重试')).toBeTruthy()
  })

  it('自定义 fallback 优先于默认降级 UI', () => {
    const { getByText, queryByText } = render(
      <ErrorBoundary fallback={<div>自定义兜底</div>}>
        <Bomb />
      </ErrorBoundary>,
    )
    expect(getByText('自定义兜底')).toBeTruthy()
    expect(queryByText('3D 场景加载失败')).toBeNull()
  })

  it('点击重试后复位错误状态并重新渲染子组件', () => {
    let shouldThrow = true
    function Conditional() {
      if (shouldThrow) throw new Error('transient')
      return <div>恢复后的场景</div>
    }

    const { getByText, queryByText } = render(
      <ErrorBoundary>
        <Conditional />
      </ErrorBoundary>,
    )
    expect(getByText('3D 场景加载失败')).toBeTruthy()

    // 故障恢复
    shouldThrow = false
    fireEvent.click(getByText('重试'))

    expect(queryByText('3D 场景加载失败')).toBeNull()
    expect(getByText('恢复后的场景')).toBeTruthy()
  })

  it('错误信息不直接暴露给用户界面 (安全)', () => {
    const { queryByText } = render(
      <ErrorBoundary>
        <Bomb message="secret-internal-detail" />
      </ErrorBoundary>,
    )
    // 错误堆栈/敏感信息不得出现在 DOM 中
    expect(queryByText(/secret-internal-detail/)).toBeNull()
  })
})
