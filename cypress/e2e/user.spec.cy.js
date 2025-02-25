import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM tests', () => {
  const selectorsList = {
    sectionTitleTopBar: "['owd-topbar-header-breadcrumb-module']",

    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input',
    closeButtonDateField: '.--close',
    saveButton: "[type='submit']",
    driverLicenseField: '.oxd-input--focus',
    genericComboBox: '.oxd-select-text--arrow',
    twentySeventhItemComboBox: '.oxd-select-dropdown > :nth-child(27)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
    genderRadioButtom: '.oxd-radio-input',
    smokeCheckBox: '.oxd-checkbox-input',
  };

  it.only('user info update - success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.name,
      userData.userSuccess.password
    );
    dashboardPage.checkRedirectToDashboard();
    menuPage.selectingMyInfoPage();

    // cy.get(selectorsList.firstNameField).clear().type('firstName');
    // cy.get(selectorsList.middleNameField).clear().type('middleName');
    // cy.get(selectorsList.lastNameField).clear().type('lastName');
    // cy.get(selectorsList.genericField).eq(4).clear().type('NickNameTest');
    // cy.get(selectorsList.genericField).eq(5).clear().type('employeeId');
    // cy.get(selectorsList.genericField).eq(6).clear().type('otherId');
    // cy.get(selectorsList.genericField).eq(7).clear().type('drivLicensNum');
    // cy.get(selectorsList.genericField).eq(8).clear().type('2025-02-24');
    // cy.get(selectorsList.closeButtonDateField).click();
    // cy.get(selectorsList.genericField).eq(9).type('2020');
    // cy.get(selectorsList.genericField).eq(10).type('3030');
    // cy.get(selectorsList.genericComboBox).eq(0).click({ force: true });
    // cy.get(selectorsList.twentySeventhItemComboBox).click();
    // cy.get(selectorsList.genericComboBox).eq(1).click({ force: true });
    // cy.get(selectorsList.thirdItemComboBox).click();
    // cy.get(selectorsList.genericField).eq(11).clear().type('1990-01-17');
    // cy.get(selectorsList.closeButtonDateField).click();
    // cy.get(selectorsList.genderRadioButtom).eq(0).click();
    // cy.get(selectorsList.genericField).eq(12).type('4040');
    // cy.get(selectorsList.smokeCheckBox).eq(0).click();
    // cy.get(selectorsList.saveButton).eq(0).click({ force: true });
    // cy.get('body').should('contain', 'Successfully Updated');
    // cy.get('.oxd-toast-close');
    // cy.get(selectorsList.genericComboBox).eq(2).click({ force: true });
    // cy.get(selectorsList.thirdItemComboBox).click();
    // cy.get(selectorsList.genericField).eq(13).clear().type('Free text test');
    // cy.get(selectorsList.saveButton).eq(1).click({ force: true });
    // cy.get('body').should('contain', 'Successfully Updated');
    // cy.get('.oxd-toast-close');
    // cy.get('.oxd-button').eq(2).click();
    // cy.get('.oxd-file-button').click({ force: true });
  });

  it('login - fail', () => {
    cy.visit('/');
    cy.get(selectorsList.usernameField).type(userData.userFail.name);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
