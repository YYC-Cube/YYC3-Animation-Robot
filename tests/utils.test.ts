import { expect, describe, it } from 'vitest'
import { cn } from '@yyc3/ui'

describe('cn (tailwind-merge + clsx)', () => {
  it('合并条件类名', () => {
    expect(cn('a', false && 'b', undefined, 'c')).toBe('a c')
  })

  it('tailwind 冲突类取后者', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('非冲突类共存', () => {
    expect(cn('flex', 'items-center')).toBe('flex items-center')
  })
})
