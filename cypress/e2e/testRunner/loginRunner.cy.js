import {LoginPage} from "../pages/loginPage.cy"
import { DashboardPage } from "../pages/dashboard.cy"
import { Utils } from "../Utils/utils.cy"
const dPage = new DashboardPage()
const loginPage = new LoginPage()
const util = new Utils()
export class LoginRunner {
    LoginRunner() {

    }
    visitLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    doLoginAdmin() {
        loginPage.enterUserName('admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLoginSubmit()
       
    }
    doLoginUser() {
        cy.readFile('cypress/fixtures/userInfo.json').then((user) => {
            var uName = user[0].userName
            var pass = user[0].password
            loginPage.enterUserName(uName)
            loginPage.enterPassword(pass)
            loginPage.clickLoginSubmit()
            
        })


    }






}