import { describe, expect, it } from 'vitest'

import { greeting } from '../src/index'

describe('greeting', () => {
  it('returns a hello message for the given name', () => {
    expect(greeting('Webber')).toBe('Hello, Webber!')
  })

  it('handles an empty string', () => {
    expect(greeting('')).toBe('Hello, !')
  })

  it('does not mutate or trim the input', () => {
    expect(greeting('  Webber  ')).toBe('Hello,   Webber  !')
  })
})
