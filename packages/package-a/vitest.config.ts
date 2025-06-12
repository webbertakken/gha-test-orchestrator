import { defineConfig, mergeConfig } from 'vitest/config'
import baseConfig from '../../vitest.config'

export default mergeConfig(
  // @ts-expect-error - doesn't have correct types
  baseConfig,
  defineConfig({
    test: {
      include: ['__tests__/**/*.test.ts'],
      coverage: {
        reportsDirectory: './coverage',
      },
    },
  }),
)
