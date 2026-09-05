import { Page, expect } from '@playwright/test';
 
export class LoginPage {
  constructor(private page: Page) {}
 
  async navigate() {
    await this.page.goto('https://playwrightpad.in/sandbox/banking', {
      waitUntil: 'domcontentloaded',
    });
  }
 
  async login(username: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Enter username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Enter password' }).fill(password);
    await this.page.getByRole('button', { name: 'LOGIN' }).click();
  }
}