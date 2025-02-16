import { test as base } from '@playwright/test';
import type { PlayWrightAiFixtureType } from '@midscene/web/playwright';
import { PlaywrightAiFixture } from '@midscene/web/playwright';
import * as dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const aiConfig = {
  modelProvider: {
    type: 'openai' as const,  // 添加类型断言
    config: {
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_BASE_URL,
      model: process.env.MIDSCENE_MODEL_NAME || 'qwen-vl-max-latest',
      headers: {
        'X-DashScope-Client': 'midscene.js'
      }
    }
  }
};

// 添加类型导出
export { expect } from '@playwright/test';
export const test = base.extend<PlayWrightAiFixtureType>(PlaywrightAiFixture(aiConfig));