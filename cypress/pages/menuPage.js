class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      AdminButton: "[href='/web/index.php/admin/viewAdminModule']",
      PimButton: "[href='/web/index.php/pim/viewPimModule']",
      leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
      timeButton: "[href='/web/index.php/time/viewTimeModule']",
      recruitmentButton:
        "[href='/web/index.php/recruitment/viewRecruitmentModule']",
      performanceButton:
        "[href='/web/index.php/performance/viewPerformanceModule']",
      dashboardButton: "[href='/web/index.php/dashboard/index']",
      directoryButton: "[href='/web/index.php/directory/viewDirectory']",
      maintenanceButton:
        "[href='/web/index.php/maintenance/viewMaintenanceModule']",
      claimButton: "[href='/web/index.php/claim/viewClaimModule']",
      buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
    };
    return selectors;
  }

  selectingMyInfoPage() {
    cy.get(this.selectorsList().myInfoButton).click();
  }

  SelectingPerformancePage() {
    cy.get(this.selectorsList().AdminButton).click();
  }

  selectingPimPage() {
    cy.get(this.selectorsList().PimButton).click();
  }

  selectingLeavePage() {
    cy.get(this.selectorsList().leaveButton).click();
  }

  selectingTimePage() {
    cy.get(this.selectorsList().timeButton).click();
  }

  selectingRecruitmentPage() {
    cy.get(this.selectorsList().recruitmentButton).click();
  }

  selectingPerformancePage() {
    cy.get(this.selectorsList.performanceButton).click();
  }

  selectingDashboardPage() {
    cy.get(this.selectorsList().dashboardButton).click();
  }

  selectingDiretoryPage() {
    cy.get(this.selectorsList().directoryButton).click();
  }

  selectingMaintenancePage() {
    cy.get(this.selectorsList().maintenanceButton).click();
  }

  selectingClaimPage() {
    cy.get(this.selectorsList().claimButton).click();
  }

  selectingBuzzPage() {
    cy.get(this.selectorsList().buzzButton).click();
  }
}

export default MenuPage;
