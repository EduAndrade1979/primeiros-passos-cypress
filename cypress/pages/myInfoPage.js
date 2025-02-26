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

  fillAndSubmitForm() {}

  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName);
    cy.get(this.selectorsList().middleNameField).clear().type(middleName);
    cy.get(this.selectorsList().lastNameField).clear().type(lastName);
  }

  fillEmployeeDetails(employeeId, otherId, drivLicensNum, licenseExpiryDate) {
    cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId);
    cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId);
    cy.get(this.selectorsList().genericField).eq(6).clear().type(drivLicensNum);
    cy.get(this.selectorsList().genericField)
      .eq(7)
      .clear()
      .type(licenseExpiryDate);
    cy.get(this.selectorsList().closeButtonDateField).click();
  }

  fillMoreDetails(birthDate) {
    cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true });
    cy.get(this.selectorsList().twentySeventhItemComboBox).click();
    cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true });
    cy.get(this.selectorsList().thirdItemComboBox).click();
    cy.get(this.selectorsList().genericField).eq(8).clear().type(birthDate);
    cy.get(this.selectorsList().closeButtonDateField).click();
    cy.get(this.selectorsList().genderRadioButtom).eq(0).click();
  }

  fillCustomFields(testField) {
    cy.get(this.selectorsList().genericComboBox).eq(2).click({ force: true });
    cy.get(this.selectorsList().thirdItemComboBox).click();
    cy.get(this.selectorsList().genericField).eq(9).clear().type(testField);
  }

  fillAttachments() {
    const filePath = 'cypress/fixtures/bandeira-do-estado-de-sao-paulo.png';
    cy.get('.oxd-button').eq(2).click();
    cy.get('input[type="file"]').selectFile(filePath, { force: true });
    cy.get('.oxd-textarea').clear().type('Preenchimento Textarea');
  }

  saveForm(buttonPositionNumber) {
    cy.get(this.selectorsList().saveButton)
      .eq(buttonPositionNumber)
      .click({ force: true });
    cy.get('body').should('contain', 'Successfully Updated');
    cy.get('.oxd-toast-close').should('be.visible');
  }
}
export default MyInfoPage;
