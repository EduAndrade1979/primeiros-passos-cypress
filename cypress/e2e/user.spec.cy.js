import userData from '../fixtures/users/user-data.json';

describe('Swag Labs tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: "['owd-topbar-header-breadcrumb-module']",
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrogCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: '.oxd-input--active',
    closeButtonDateField: '.--close',
    saveButton: "[type='submit']",
  };

  it.only('user info update - success', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.name);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('firstName');
    cy.get(selectorsList.middleNameField).clear().type('middleName');
    cy.get(selectorsList.lastNameField).clear().type('lastName');
    cy.get(selectorsList.genericField).eq(3).clear().type('employeeId');
    cy.get(selectorsList.genericField).eq(4).clear().type('otherId');
    cy.get(selectorsList.genericField).eq(5).clear().type('drivLicensNum');
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-02-24');
    cy.get(selectorsList.closeButtonDateField).click();
    cy.get(selectorsList.saveButton).eq(0).click();
    cy.get('.oxd-toast-close');
  });

  it('login - fail', () => {
    cy.visit('/');
    cy.get(selectorsList.usernameField).type(userData.userFail.name);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
