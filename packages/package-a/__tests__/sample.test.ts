const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('Package A Tests', () => {
  test.each([
    [1, 'Test 1'],
    [2, 'Test 2'],
    [3, 'Test 3'],
    [4, 'Test 4'],
    [5, 'Test 5'],
    [6, 'Test 6'],
    [7, 'Test 7'],
    [8, 'Test 8'],
    [9, 'Test 9'],
    [10, 'Test 10'],
  ])('should take %d seconds to complete: %s', async (seconds, testName) => {
    await sleep(seconds * 1000)
    expect(true).toBe(true)
  })
})
