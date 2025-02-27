import userData from '../fixtures/users/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM tests', () => {
  it('login - success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userSuccess.name,
      userData.userSuccess.password
    );

    dashboardPage.checkRedirectToDashboard();
  });

  it('login - fail', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithAnyUser(
      userData.userFail.name,
      userData.userFail.password
    );
    loginPage.checkAccessInvalid();
  });
});
