import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { DashboardPage } from '../../pages/dashboard.page';
import { config } from '../../config/env';

test.describe('Login functionality', () => {
  test('should navigate and login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 导航到页面
    await loginPage.navigateToDataBoard();

    // 登录
    await loginPage.login(config.testUser.username, config.testUser.password);

    // 验证登录成功
    expect(await dashboardPage.isDashboardLoaded()).toBeTruthy();
  });
});