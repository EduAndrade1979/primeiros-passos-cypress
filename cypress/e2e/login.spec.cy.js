describe('Swag Labs tests', () => {
  const selectorsList = {
    usernameField: "[name='user-name']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionSecondaryHeader: "[data-test='title']",
    wrogCredentialAlert: "[data-test='error']",
  };

  it('login - success', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(selectorsList.usernameField).type('standard_user');
    cy.get(selectorsList.passwordField).type('secret_sauce');
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equals', '/inventory.html');
    cy.get(selectorsList.sectionSecondaryHeader).contains('Products');
  });

  it('login - fail', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get(selectorsList.usernameField).type('test');
    cy.get(selectorsList.passwordField).type('test');
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrogCredentialAlert);
  });
});
