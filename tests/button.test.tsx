import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@yyc3/ui/components/button'

describe('Button', () => {
  it('渲染默认变体', () => {
    render(<Button>点击</Button>)
    expect(screen.getByRole('button', { name: '点击' })).toBeTruthy()
  })

  it('asChild 透传至子元素', () => {
    render(
      <Button asChild>
        <a href="https://example.com">链接</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: '链接' })
    expect(link.getAttribute('href')).toBe('https://example.com')
  })

  it('variant=outline 追加类名', () => {
    render(<Button variant="outline">外框</Button>)
    expect(screen.getByRole('button', { name: '外框' }).className).toContain('border')
  })
})
