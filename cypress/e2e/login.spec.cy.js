describe('Swag Labs tests', () => {
  it('login - success', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get("[name='user-name']").type('standard_user');
    cy.get("[name='password']").type('secret_sauce');
    cy.get("[type='submit']").click();
    cy.location('pathname').should('equals', '/inventory.html');
    cy.get('[data-test="title"]').contains('Products');
  });

  it('login - fail', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get("[name='user-name']").type('test');
    cy.get("[name='password']").type('test');
    cy.get("[type='submit']").click();
    cy.get('[data-test="error"]');
  });
});
