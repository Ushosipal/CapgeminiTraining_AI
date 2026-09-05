import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { LogoutPage } from './pages/LogoutPage';
import testData from './testdata/bankingData.json';
 
async function globalTeardown(_config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);
 
  await loginPage.navigate();
  await loginPage.login(testData.validUser.username, testData.validUser.password);
  await logoutPage.logout();
 
  await browser.close();
}
 
export default globalTeardown;