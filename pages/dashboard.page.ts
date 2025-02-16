import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  // 页面元素选择器
  private readonly selectors = {
    dashboardTitle: '.dashboard-title',
    userInfo: '.user-info',
    logoutButton: '.logout-btn'
  };

  // 页面操作方法
  async isDashboardLoaded() {
    return await this.page.isVisible(this.selectors.dashboardTitle);
  }

  async getUserInfo() {
    return await this.page.textContent(this.selectors.userInfo);
  }

  async logout() {
    await this.page.click(this.selectors.logoutButton);
    await this.waitForPageLoad();
  }
}