// import { Given, When, Then } from '@cucumber/cucumber';
// // import { LoginPage } from '../../pages/LoginPage';
// import { CustomWorld } from '../../support/world';
// import { StudentRegistrationPage } from '../../pages/RegistrationPage';


// let login :LoginPage;

// //general login steps
// Given('the user is on the login page', async function (this:CustomWorld) {
//   login = new LoginPage(this.page);
//   await login.openApp();
// });

// //valid credentials
// When('the user enters valid username and password',async function (this:CustomWorld) {
//   await login.loginwithvalidcredential();
// });

// When('clicks the login button', async function (this:CustomWorld) {
//   await login.clickloginbutton();
// });

// Then('user should successfully login', async function (this:CustomWorld) {
//   console.log('User successfully logged in');
// });

// //invalid credentials

// When('the user enters invalid username or password', async function (this:CustomWorld) {
//   await login.loginwithinvalidcredentials('invalid_user','invalid_pass');
// });

// Then('an error message should be displayed indicating invalid credentials', async function (this:CustomWorld) {
//     console.log('Error message displayed');
//     await login.Errormessagevisible();
// });

// //multiple users login

// When('User enters {string} and {string}', async function (string, string2) {
//   await login.loginwithmultipleusers(string,string2);
// });

// Then('User should view the error message', function () {
//   console.log('Error message displayed');
// });


//registration

 
    
import { Given, When, Then } from '@cucumber/cucumber';
import { RegisterPage } from '../../pages/RegistrationPage';
import { CustomWorld } from '../../support/world';
 
let register: RegisterPage;
 
Given('User is on Student Registration page', async function (this: CustomWorld) {
  register = new RegisterPage(this.page);
  await register.navigateToRegistrationPage();
});
 
 
When('User fills registration form with {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8, string9, string10) {
  // Write code here that turns the phrase above into concrete actions
    const studentData = {
      firstName: string,
      email: string2,
      gender: string3,
      mobileNumber: string4,
      dob: string5,
      subject: string6,
      hobby: string7,
      address: string8,
      state: string9,
      city: string10,
    };
    await register.registerStudent(studentData);
});
 
When('User submits the registration form', async function () {
  await register.verifyAndClickLoginButton();
 
});
 
Then('Registration should be successful', async function () {
  console.log('Registration Data filling successful');
 
});