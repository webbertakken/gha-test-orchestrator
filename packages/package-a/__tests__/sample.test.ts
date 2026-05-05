import { describe, expect, it } from 'vitest'

import { greeting } from '../src/index'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// These tests deliberately have varying durations so the GitHub Actions
// orchestration in `.github/workflows/test.yml` has something to schedule.
// The assertions are real (not `expect(true).toBe(true)`) so the suite stays
// honest if `greeting` ever regresses.
describe('Package A Tests', () => {
  it('runs greeting test (fast 1)', async () => {
    await sleep(1000)
    expect(greeting('Alice')).toBe('Hello, Alice!')
  })

  it('runs greeting test (slow 1)', async () => {
    await sleep(5000)
    expect(greeting('Bob')).toBe('Hello, Bob!')
  })

  it('runs greeting test (fast 2)', async () => {
    await sleep(1000)
    expect(greeting('Carol')).toBe('Hello, Carol!')
  })

  it('runs greeting test (slow 2)', async () => {
    await sleep(5000)
    expect(greeting('Dave')).toBe('Hello, Dave!')
  })

  it('runs greeting test (fast 3)', async () => {
    await sleep(1000)
    expect(greeting('Eve')).toBe('Hello, Eve!')
  })

  it('runs greeting test (slow 3)', async () => {
    await sleep(5000)
    expect(greeting('Frank')).toBe('Hello, Frank!')
  })

  it('runs greeting test (fast 4)', async () => {
    await sleep(1000)
    expect(greeting('Grace')).toBe('Hello, Grace!')
  })

  it('runs greeting test (slow 4)', async () => {
    await sleep(5000)
    expect(greeting('Heidi')).toBe('Hello, Heidi!')
  })

  it('runs greeting test (fast 5)', async () => {
    await sleep(1000)
    expect(greeting('Ivan')).toBe('Hello, Ivan!')
  })

  it('runs greeting test (slow 5)', async () => {
    await sleep(5000)
    expect(greeting('Judy')).toBe('Hello, Judy!')
  })
})
