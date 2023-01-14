import { DashboardPage } from "../pages/dashboard.cy";
const dashboardPage = new DashboardPage()
export class DashboardRunner {
    DashboardRunner() {

    }
    assertDashboard() {
        dashboardPage.getDashboardText('Dashboard')
        dashboardPage.getDashboardItem()
    }
    clickPIM() {
        dashboardPage.clickPIM()
    }
    assertDashboardUser() {
        cy.readFile('cypress/fixtures/userInfo.json').then((user)=>{
            var dashboardName=user[0].firstName+' '+user[0].lastName
            dashboardPage.getDashboardTextUser(dashboardName)
        })
      
    }
}