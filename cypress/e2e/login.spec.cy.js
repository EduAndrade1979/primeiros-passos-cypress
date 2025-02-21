describe('Swag Labs tests', () => {
  const selectorsList = {
    usernameField: "[name='user-name']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionSecondaryHeader: "[data-test='title']",
    wrogCredentialAlert: "[data-test='error']",
    inventoryList: '.inventory_list',
  };

  const userSuccess = {
    name: 'standard_user',
    password: 'secret_sauce',
  };

  const userFail = {
    name: 'test',
    password: 'test',
  };

  it('login - success', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(selectorsList.usernameField).type(userSuccess.name);
    cy.get(selectorsList.passwordField).type(userSuccess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equals', '/inventory.html');
    cy.get(selectorsList.inventoryList);
  });

  it('login - fail', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(selectorsList.usernameField).type(userFail.name);
    cy.get(selectorsList.passwordField).type(userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
