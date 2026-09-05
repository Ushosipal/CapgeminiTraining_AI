import { expect, Page } from '@playwright/test';
 
export class BeneficiaryPage {
    constructor(private page: Page) {}
 
    async addBeneficiary(
        name: string,
        accountNumber: string,
        bankName: string,
    ) {
        await this.page.getByPlaceholder('e.g. John Doe').fill(name);
        await this.page.getByPlaceholder('e.g. 1234567890').fill(accountNumber);
        await this.page.getByRole('combobox').last().selectOption({ label: bankName });
        await this.page.getByRole('button', { name: 'Save Beneficiary' }).click();
    }
 
    async expectAdded(name: string) {
        await expect(this.page.getByText(name, { exact: true })).toBeVisible();
    }
}