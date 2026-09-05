import { Page, Locator } from "@playwright/test";
 
export class RegisterPage {
  readonly page: Page;
 
  readonly firstName: Locator;
  readonly email: Locator;
  readonly maleGender: Locator;
  readonly femaleGender: Locator;
  readonly otherGender: Locator;
  readonly mobile: Locator;
  readonly dob: Locator;
  readonly subjects: Locator;
  readonly sportsHobby: Locator;
  readonly readingHobby: Locator;
  readonly musicHobby: Locator;
  readonly address: Locator;
  readonly stateDropdown: Locator;
  readonly cityDropdown: Locator;
  readonly loginButton: Locator;
 
  constructor(page: Page) {
    this.page = page;
 
    this.firstName = page.locator("#name");
    this.email = page.locator("#email");
 
    this.maleGender = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)");
    this.femaleGender = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)");
    this.otherGender = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)");
 
    this.mobile = page.locator("#mobile");
    this.dob = page.locator("#dob");
 
    this.subjects = page.locator("#subjects");
 
    this.sportsHobby = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)");
    this.readingHobby = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)");
    this.musicHobby = page.locator("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)");
 
 
    this.address = page.locator('textarea.form-control');
 
    this.stateDropdown = page.locator("#state");
    this.cityDropdown = page.locator("#city");
 
    this.loginButton = page.locator("input[type='submit']");
  }
 
  async navigateToRegistrationPage() {
    await this.page.goto(
      "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php"
    );
  }
 
  async enterFirstName(firstName: string) {
    await this.firstName.fill(firstName);
  }
 
  async enterEmail(email: string) {
    await this.email.fill(email);
  }
 
  async selectGender(gender: string) {
    switch (gender.toLowerCase()) {
      case "male":
        await this.maleGender.check();
        break;
 
      case "female":
        await this.femaleGender.check();
        break;
 
      case "other":
        await this.otherGender.check();
        break;
 
      default:
        throw new Error(`Invalid Gender : ${gender}`);
    }
  }
 
  async enterMobileNumber(mobileNumber: string) {
    await this.mobile.fill(mobileNumber);
  }
 
  async enterDOB(date: string) {
    await this.dob.fill(date);
   
  }
 
  async enterSubject(subject: string) {
    await this.subjects.fill(subject);
  }
 
  async selectHobby(hobby: string) {
    switch (hobby.toLowerCase()) {
      case "sports":
        await this.sportsHobby.check();
        break;
        case "reading":
        await this.readingHobby.check();
        break;
        case "music":
        await this.musicHobby.check();
        break;
        default:
        throw new Error(`Invalid Hobby : ${hobby}`);
    }
  }
 
 
 
  async enterAddress(address: string) {
    await this.address.fill(address);
  }
 
  async selectState(state: string) {
    await this.stateDropdown.selectOption({
      label: state,
    });
  }
 
  async selectCity(city: string) {
    await this.cityDropdown.selectOption({
      label: city,
    });
  }
 
  async verifyAndClickLoginButton() {
    await this.loginButton.isVisible();
    await this.loginButton.isEnabled();
    await this.loginButton.click();
  }
 
  async registerStudent(studentData: any) {
    await this.enterFirstName(studentData.firstName);
    await this.enterEmail(studentData.email);
    await this.selectGender(studentData.gender);
    await this.enterMobileNumber(studentData.mobileNumber);
    await this.enterDOB(studentData.dob);
    await this.enterSubject(studentData.subject);
    await this.selectHobby(studentData.hobby);
    await this.enterAddress(studentData.address);
    await this.selectState(studentData.state);
    await this.selectCity(studentData.city);
    await this.verifyAndClickLoginButton();
  }
}