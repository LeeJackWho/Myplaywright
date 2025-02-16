# Playwright 自动化测试项目

## 环境要求
- Node.js 16+
- npm 8+

## 项目设置
1. 安装依赖
```bash
npm install
```

2. 安装浏览器
```bash
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