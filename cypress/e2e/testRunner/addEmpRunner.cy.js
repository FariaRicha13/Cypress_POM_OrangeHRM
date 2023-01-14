import { Utils } from "../Utils/utils.cy";
import { AddEmployee } from "../pages/addEmployee.cy";
import { EmployeeInfo } from "../pages/employeeInfo.cy";

const addEmp = new AddEmployee()
const empInfo = new EmployeeInfo()
const utils = new Utils()
export class AddEmployeeRunner {
  AddEmployeeRunner() {

  }
  createUserInfo() {

    var fileName = 'cypress/fixtures/userInfo.json'
    var user = utils.generateUserInfo()
    utils.writeJson(fileName, user)
    addEmp.enterFirstName(user.firstName)
    addEmp.enterLastName(user.lastName)
    addEmp.toggleSwitch()
    addEmp.enterUserName(user.userName)
    addEmp.enterPassword(user.password)
    addEmp.enterConfPassword(user.confPass)
    addEmp.clickSubmit()

  }
  updateEmpInfo() {
    empInfo.updateNationality('Albanian')
    empInfo.updateMaritalStatus('Single')
    empInfo.clickSave()

  }
  clickAdd() {
    empInfo.clickAdd()
  }
  createSecondUser() {
    this.clickAdd()

    var fileName = 'cypress/fixtures/userInfo.json'
    var user = utils.generateUserInfo()
    utils.appendJson(fileName, user)

    addEmp.enterFirstName(user.firstName)
    addEmp.enterLastName(user.lastName)
    addEmp.toggleSwitch()
    addEmp.enterUserName(user.userName)
    addEmp.enterPassword(user.password)
    addEmp.enterConfPassword(user.confPass)
    
    addEmp.clickSubmit()
  }

  doLogout() {
    empInfo.clickLogout()
  }
}