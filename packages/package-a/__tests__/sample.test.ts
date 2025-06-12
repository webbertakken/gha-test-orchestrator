import { describe, it, expect } from 'vitest'

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Package A Tests', () => {
  it('should run a simple test', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('should run a simple test', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })

  it('runs a simple test', async () => {
    await sleep(1000)
    expect(true).toBe(true)
  })

  it('runs a simple test', async () => {
    await sleep(5000)
    expect(true).toBe(true)
  })
})
