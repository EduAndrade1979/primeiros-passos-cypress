class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: '.orangehrm-dashboard-grid',
    };
    return selectors;
  }

  checkRedirectToDashboard() {
    cy.location('pathname').should('equals', '/web/index.php/dashboard/index');
    cy.get(this.selectorsList().dashboardGrid).should('be.visible');
  }
}
export default DashboardPage;
