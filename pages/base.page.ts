import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  // 通用的页面操作方法
  async navigate(url: string) {
    await this.page.goto(url);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}