import userData from '../fixtures/users/user-data.json';

describe('Swag Labs tests', () => {
  const selectorsList = {
    usernameField: "[name='user-name']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionSecondaryHeader: "[data-test='title']",
    wrogCredentialAlert: "[data-test='error']",
    inventoryList: '.inventory_list',
  };

  it('login - success', () => {
    cy.visit('/');
    cy.get(selectorsList.usernameField).type(userData.userSuccess.name);
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equals', '/inventory.html');
    cy.get(selectorsList.inventoryList);
  });

  it('login - fail', () => {
    cy.visit('/');
    cy.get(selectorsList.usernameField).type(userData.userFail.name);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
