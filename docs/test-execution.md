# Playwright 测试执行指南

## 基础命令
1. 执行所有测试
```bash
npm run test
```

2. UI 模式（推荐）
```bash
npm run test:ui
```
- 可视化界面
- 实时查看测试执行
- 支持断点调试
- 查看测试报告
- 重新运行失败用例

3. 有界面模式
```bash
npm run test:headed
```
- 可以看到浏览器实际执行过程

4. 调试模式
```bash
npm run test:debug
```
- 放慢执行速度
- 显示浏览器界面
- 便于观察执行过程

## 进阶用法
1. 运行特定测试文件
```bash
npx playwright test tests/e2e/login.spec.ts
 ```

2. 运行特定测试用例
```bash
npx playwright test -g "should navigate to data board"
 ```
```

3. 指定浏览器运行
```bash
npx playwright test --project=chromium
 ```

4. 并行执行控制
```bash
npx playwright test --workers=4
 ```

5. 重试失败的测试
```bash
npx playwright test --retries=3
 ```

## 测试报告
1. 查看 HTML 报告
```bash
npx playwright show-report
 ```

2. 生成 JUnit 报告
```bash
npx playwright test --reporter=junit
 ```

## 环境变量设置
1. 设置测试环境
```bash
TEST_ENV=prod npm run test
 ```

2. 设置超时时间
```bash
PLAYWRIGHT_TIMEOUT=60000 npm run test
 ```

## 注意事项
1. 每次执行测试前会自动清理之前的测试结果
2. 测试报告位于 playwright-report 目录
3. 截图保存在 screenshots 目录
4. 测试结果保存在 test-results 目录