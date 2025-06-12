import { describe, it, expect } from 'vitest'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Package A Tests', () => {
  it('runs simple test 1', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs simple test 2', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('runs simple test 3', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs simple test 4', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('runs simple test 5', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs simple test 6', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('runs simple test 7', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs simple test 8', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('runs simple test 9', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs simple test 10', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })
})
