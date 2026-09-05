import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BeneficiaryPage } from '../pages/BeneficiaryPage';
import { TransferFundsPage } from '../pages/TransferFundsPage';
import { LogoutPage } from '../pages/LogoutPage';
 
import testData from '../testdata/bankingData.json';
 
test.describe('Banking Flow Using POM + DDT', () => {
  const data = testData;
 
  test(`Transfer Funds - ${data.validUser.username}`, async ({ page }) => {
    const uniqueSuffix = String(Date.now()).slice(-4);
    const beneficiary = {
      ...data.beneficiary,
      name: `${data.beneficiary.name} ${uniqueSuffix}`,
      accountNumber: `${data.beneficiary.accountNumber.slice(0, -4)}${uniqueSuffix}`,
    };
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const beneficiaryPage = new BeneficiaryPage(page);
    const transferFundsPage = new TransferFundsPage(page);
    const logoutPage = new LogoutPage(page);
 
    await loginPage.navigate();
    await loginPage.login(data.validUser.username, data.validUser.password);
    await dashboardPage.resetDemoData();
    await dashboardPage.expectDashboardVisible();
 
    await dashboardPage.openBeneficiary();
    await beneficiaryPage.addBeneficiary(
      beneficiary.name,
      beneficiary.accountNumber,
      beneficiary.bankName,
    );
    await beneficiaryPage.expectAdded(beneficiary.name);
 
    await dashboardPage.openTransferFunds();
    await transferFundsPage.transfer(
      beneficiary.name,
      data.transfer.amount,
    );
    await transferFundsPage.verifyOtp();
    await transferFundsPage.expectTransactionStatus(data.expected.transactionStatus);
    await dashboardPage.expectBalance(data.expected.balance);
 
    await logoutPage.logout();
    await expect(page.getByRole('textbox', { name: 'Enter username' })).toBeVisible();
  });
});