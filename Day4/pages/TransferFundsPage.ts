import { expect, Page } from '@playwright/test';
 
export class TransferFundsPage {
    constructor(private page: Page) {}
 
    async transfer(beneficiaryName: string, amount: string) {
        await this.page.getByRole('combobox').first().selectOption({ label: 'External Wire Transfer' });
        const beneficiaryOption = this.page
            .getByRole('combobox')
            .nth(1)
            .locator('option')
            .filter({ hasText: beneficiaryName });
        await this.page.getByRole('combobox').nth(1).selectOption(await beneficiaryOption.getAttribute('value') ?? '');
        await this.page.getByRole('spinbutton', { name: '0.00' }).fill(amount);
        await this.page.getByRole('button', { name: 'Initiate Wire' }).click();
    }
 
    async verifyOtp() {
        const otpMessage = this.page.getByText(/\[SIMULATED SMS OTP\]/);
        const otp = (await otpMessage.textContent())?.match(/\b\d{6}\b/)?.[0];
        expect(otp).toBeTruthy();
        await this.page.getByRole('textbox', { name: 'Enter 6-digit OTP' }).fill(otp!);
        await this.page.getByRole('button', { name: 'Verify' }).click();
    }
 
    async expectTransactionStatus(status: string) {
        const confirmation = status.toLowerCase() === 'successful'
            ? /Wire transfer of .* complete\./i
            : new RegExp(status, 'i');
        await expect(this.page.getByText(confirmation)).toBeVisible();
    }
}