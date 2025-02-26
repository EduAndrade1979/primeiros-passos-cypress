class MyInfoPage {
  selectorsList() {
    const selectors = {
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
    return selectors;
  }

  fillAndSubmitForm() {
    const filePath = 'cypress/fixtures/bandeira-do-estado-de-sao-paulo.png';

    cy.get(this.selectorsList().firstNameField).clear().type('firstName');
    cy.get(this.selectorsList().middleNameField).clear().type('middleName');
    cy.get(this.selectorsList().lastNameField).clear().type('lastName');
    cy.get(this.selectorsList().genericField).eq(4).clear().type('employeeId');
    cy.get(this.selectorsList().genericField).eq(5).clear().type('otherId');
    cy.get(this.selectorsList().genericField)
      .eq(6)
      .clear()
      .type('drivLicensNum');
    cy.get(this.selectorsList().genericField).eq(7).clear().type('2025-02-24');
    cy.get(this.selectorsList().closeButtonDateField).click();
    cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true });
    cy.get(this.selectorsList().twentySeventhItemComboBox).click();
    cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true });
    cy.get(this.selectorsList().thirdItemComboBox).click();
    cy.get(this.selectorsList().genericField).eq(8).clear().type('1990-01-17');
    cy.get(this.selectorsList().closeButtonDateField).click();
    cy.get(this.selectorsList().genderRadioButtom).eq(0).click();
    cy.get(this.selectorsList().saveButton).eq(0).click({ force: true });
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close').should('be.visible');
    cy.get('.oxd-button').eq(2).click();
    cy.get('input[type="file"]').selectFile(filePath, { force: true });
    cy.get(this.selectorsList().saveButton).eq(2).click({ force: true });
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close');
  }
}
export default MyInfoPage;
