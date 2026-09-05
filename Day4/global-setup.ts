import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import testData from './testdata/bankingData.json';
export class GlobalSetup {
  async resetDemoData() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
 
  await loginPage.navigate();
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await dashboardPage.resetDemoData();
 
    await browser.close();
  }
}
 
async function globalSetup(_config: FullConfig) {
  const setup = new GlobalSetup();
  await setup.resetDemoData();
}
 
export default globalSetup;