import { expect, Page } from '@playwright/test';
 
export class DashboardPage {
    constructor(private page: Page) {}
 
    async expectDashboardVisible() {
        await expect(this.page.getByRole('heading', { name: 'Accounts Summary' })).toBeVisible();
    }
 
    async resetDemoData() {
        this.page.once('dialog', dialog => dialog.accept());
        await this.page.getByRole('button', { name: 'Reset Database' }).click();
        await this.expectDashboardVisible();
    }
 
    async openBeneficiary() {
        await this.page.getByRole('button', { name: 'Funds Transfer' }).click();
        await this.page.getByRole('button', { name: 'Add New' }).click();
    }
 
    async openTransferFunds() {
        await this.page.getByRole('button', { name: 'Funds Transfer' }).click();
        await expect(this.page.getByRole('heading', { name: 'Initiate Transfer' })).toBeVisible();
    }
 
    async expectBalance(expectedBalance: string | number) {
        await this.page.getByRole('button', { name: 'Accounts Summary' }).click();
        const formattedBalance = Number(expectedBalance).toLocaleString('en-US', {
            minimumFractionDigits: 2,
        });
        await expect(this.page.getByText(`$${formattedBalance}`, { exact: false })).toBeVisible();
    }
}