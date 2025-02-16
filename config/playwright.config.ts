import { defineConfig, devices } from '@playwright/test';
import { config } from './env';

export default defineConfig({
  // 指定测试文件所在的目录
  testDir: './tests',
  // 测试超时时间（毫秒）
  timeout: 30000,
  // 启用完全并行执行
  fullyParallel: true,
  // 在 CI 环境中禁止使用 test.only
  forbidOnly: !!process.env.CI,
  // CI 环境下失败重试 2 次，本地开发不重试
  retries: process.env.CI ? 2 : 0,
  // CI 环境下使用 1 个 worker，本地开发使用默认值
  workers: process.env.CI ? 1 : undefined,
  // 使用 HTML 报告器
  reporter: 'html',
  
  use: {
    // 基础 URL，用于相对路径解析
    baseURL: config.environment[process.env.TEST_ENV || 'prod'].url,
    // 仅在首次重试时记录跟踪
    trace: 'on-first-retry',
    // 仅在测试失败时截图
    screenshot: 'only-on-failure',
  },

  // 配置不同的测试项目
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
})