import { LoginRunner } from "./testRunner/loginRunner.cy"
import { DashboardRunner } from "./testRunner/dashboardRunner.cy"
import { pimTestRunner } from "./testRunner/pimTestRunner.cy"
import { AddEmployeeRunner } from "./testRunner/addEmpRunner.cy"
import { Utils } from "./Utils/utils.cy"

const util = new Utils()
const pimRunner = new pimTestRunner()
const dashboardRunner = new DashboardRunner()
const login = new LoginRunner()
const addEmpRunner = new AddEmployeeRunner()
describe('Orange HRM Flow1', () => {
  it('Main', () => {
    login.visitLoginPage()
    login.doLoginAdmin()
    cy.wait(2000)
    dashboardRunner.assertDashboard()
    cy.wait(2000)
    dashboardRunner.clickPIM()
    pimRunner.pimBeforeAdd()
    cy.wait(2000)
    addEmpRunner.createUserInfo()
    cy.wait(2000)
    addEmpRunner.updateEmpInfo()
    cy.wait(2000)
    addEmpRunner.createSecondUser()
    cy.wait(1000)
    addEmpRunner.doLogout()
    cy.wait(1000)
    login.doLoginUser()
    cy.wait(2000)
    dashboardRunner.assertDashboardUser()

  })
})