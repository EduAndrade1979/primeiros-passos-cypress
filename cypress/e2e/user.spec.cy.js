import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';
const Chance = require('chance');

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const chance = new Chance();

function randomDateGenerator() {
  return `${chance.integer({ min: 1980, max: 2010 })}-${chance.integer({
    min: 10,
    max: 30,
  })}-${chance.integer({ min: 10, max: 12 })}`;
}

describe('User Orange HRM tests', () => {
  it('user info update', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.name,
      userData.userSuccess.password
    );

    dashboardPage.checkRedirectToDashboard();

    menuPage.selectingMyInfoPage();

    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.string(),
      chance.last()
    );
    myInfoPage.fillEmployeeDetails(
      chance.integer({ min: 1000, max: 9999 }),
      chance.integer({ min: 1000, max: 9999 }),
      chance.integer({ min: 10000, max: 99999 }),
      randomDateGenerator()
    );
    myInfoPage.fillMoreDetails(randomDateGenerator());
    myInfoPage.saveForm(0);
    myInfoPage.fillCustomFields(chance.sentence());
    myInfoPage.saveForm(1);
    myInfoPage.fillAttachments();
    myInfoPage.saveForm(2);
  });
});
