'use strict'
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
describe('Package A Tests', () => {
  test.each([
    [1, 'Test 1'],
    [5, 'Test 2'],
    [1, 'Test 3'],
    [5, 'Test 4'],
    [1, 'Test 5'],
    [5, 'Test 6'],
    [1, 'Test 7'],
    [5, 'Test 8'],
    [1, 'Test 9'],
    [5, 'Test 10'],
  ])('should take %d seconds to complete: %s', async (seconds, testName) => {
    await sleep(seconds * 1000)
    expect(true).toBe(true)
  })
})
