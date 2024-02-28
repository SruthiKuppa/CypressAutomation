

import { LoginPage } from "../Pages/LoginPage";
import { Dashboard } from "../Pages/Dashboard";
import { AssignLeave } from "../Pages/AssignLeave";

//create obj for loginPage
const loginPage= new LoginPage()

//create obj for Dashboard
const dash = new Dashboard()

//create obj for Dashboard
const AssignL = new AssignLeave()

describe( 'POMDemo',()=>{
//login function
it('loginDemo',()=>{

    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

})

//Dashboard  function
it.only('VerifyDashboard',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

 
    dash.verifyTitle();
    dash.verifyUsername();
    dash.minimize_icon();
    cy.wait(1000);
    //dash.clickLogout();

    // now lets assign a leave for the employee
    AssignL.enterEmployeeDetails();

})



})