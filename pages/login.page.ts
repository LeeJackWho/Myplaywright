import { Page } from '@playwright/test';
// 导入配置文件
import { config } from '../config/env';
import { BasePage } from './base.page';

/**
 * 登录页面的页面对象类
 * 封装了登录页面的所有元素和操作
 */
export class LoginPage extends BasePage {
  // 修改 constructor，使用 super 调用父类构造函数
  constructor(page: Page) {
    super(page);
  }

  // 页面元素选择器
  private readonly selectors = {
    usernameInput: 'input[name="username"]',
    passwordInput: 'input[name="password"]',
    loginButton: 'button[type="submit"]'
  };

  // 页面操作方法
  async navigateToDataBoard() {
    await this.navigate(config.baseUrl);
    await this.waitForPageLoad();
  }

  async login(username: string, password: string) {
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.click(this.selectors.loginButton);
    await this.waitForPageLoad();
  }

  async isLoginSuccessful() {
    return await this.page.isVisible('.dashboard-container');
  }
}