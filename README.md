# Playwright 自动化测试项目

## 环境要求
- Node.js 16+
- npm 8+

## 项目设置
1. 安装依赖
```shell
npm install
```

2. 安装浏览器
```shell
npx playwright install
 ```

 ## 运行测试
- UI 模式（推荐）：
```bash
npm run test:ui
 ```

- 有界面模式：
```bash
npm run test:headed
 ```

- 调试模式：
```bash
npm run test:debug
 ```

更多运行方式请参考 docs/test-execution.md


> 基于`playwright`和`midscene.js`自动化测试项目，给`Playwright`插上AI的翅膀，目前可以落地的AI自动化测试项目。

__技术栈：__

* [plywright](https://github.com/microsoft/playwright) Web UI自动化测试工具。

* [midscene.js](https://github.com/web-infra-dev/midscene) 提供AI定位断言能力。

## 配置大模型

> 本项目默认使用 `qwen-vl-max-latest` 模型, 经过验证可用，关键是免费。如果想其他模型请参考midscenejs官方配置。

阿里云百练：https://bailian.console.aliyun.com/

使用其他模型：https://midscenejs.com/zh/model-provider.html

在根目录新增一个`.env` 文件中配置环境变量：

```ts
export OPENAI_API_KEY="sk-your-key"
export OPENAI_BASE_URL="https://dashscope.aliyuncs.com/compatible-mode/v1"
export MIDSCENE_MODEL_NAME="qwen-vl-max-latest"
```

## 使用示例

在项目的`tests-examples`目录，附带了`bing-search-ai-example.spec.ts`例子。

__示例代码__

```ts
import { expect } from "@playwright/test";
import { test } from "../tests/fixture/fixture";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.baidu.com");
});

test('search keyword on bing', async ({ page, ai, aiQuery, aiAssert }) => {
  // 👀 输入关键字，执行搜索
  await ai('搜索输入框输入"playwright"关键字，并回车');
  await page.waitForTimeout(3000);

  // 👀 找到列表里耳机相关的信息
  const items = await aiQuery(
    'string[], 搜索结果列表中包含"playwright"相关的标题'
  );

  console.log("search result", items);
  console.log("search result number", items?.length);
  // 断言大于 1 条搜索结果
  expect(items?.length).toBeGreaterThan(1);

  // 👀 用 AI 断言
  await aiAssert('检查搜索结果列表第一条标题是否包含"playwright"字符串');
});
```

三种关键方法：交互（.ai, .aiAction）, 提取 (.aiQuery), 断言 (.aiAssert)。

* `.ai`方法描述步骤并执行交互
* `.aiQuery` 从 UI 中“理解”并提取数据，返回值是 JSON 格式，你可以尽情描述想要的数据结构
* `.aiAssert` 来执行断言

__运行测试__

```shell
npx playwright test --headed tests-examples/baidu-search-ai-example.spec.ts
```
## 遇到问题
可能npx时会失败，是因为缺少依赖：
npm install @midscene/web @midscene/core
npm install @types/dotenv --save-dev