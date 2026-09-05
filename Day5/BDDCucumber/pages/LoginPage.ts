import { Page , expect } from '@playwright/test';
 
export class LoginPage {
 
constructor(
private page: Page
) {}
 
 
// locators
 
private txtUser = '#user-name';
 
private txtPass = '#password';
 
private btnLogin ='#login-button';
private errormessage = 'h3[data-test="error"]';
 
async openApp() {
 
await this.page.goto(
 
'https://www.saucedemo.com/');
 
}
 
async loginwithvalidcredential() {
 
console.log(
'Entering credentials');
 
// Example
await this.page.fill('input[name="user-name"]','standard_user');
await this.page.fill("//input[@id='password']",'secret_sauce');
 
 
 
}
 
async verifySuccesfullogin() {
 
await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
 
}
 
 
async loginwithinvalidcredentials(username: string, password : string){
 
    await this.page.fill('input[name="user-name"]',username);
    await this.page.fill("//input[@id='password']",password);
}
 
async clickloginbutton(){
 
    await this.page.click(this.btnLogin);
 
}
 
async Errormessagevisible(){
 
    await this.page.isVisible(this.errormessage);
 
 
 
}
 
async loginwithmultipleusers(username: string, password : string){
 
    await this.page.fill(this.txtUser,username);
 
    await this.page.fill(this.txtPass,password);
 
    await this.page.click(this.btnLogin);
 
}
 
}
 
 