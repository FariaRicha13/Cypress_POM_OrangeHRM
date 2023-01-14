export class LoginPage {
    LoginPage() {

    }
    enterUserName(userName){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)
        cy.wait(2000)
    }
    enterPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
        cy.wait(2000)
    }
    clickLoginSubmit(){
        cy.get('.oxd-button').click()
    }

}