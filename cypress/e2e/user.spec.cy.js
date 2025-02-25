import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM tests', () => {
  it.only('user info update - success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.name,
      userData.userSuccess.password
    );
    dashboardPage.checkRedirectToDashboard();
    menuPage.selectingMyInfoPage();
    myInfoPage.fillAndSubmitForm();
  });

  it('login - fail', () => {
    cy.visit('/');
    cy.get(selectorsList.usernameField).type(userData.userFail.name);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
