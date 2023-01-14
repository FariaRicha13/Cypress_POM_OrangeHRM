export class pimPage {
    pimPage() {

    }
    getText() {
        cy.get(':nth-child(2) > .oxd-main-menu-item').contains('Employee Information').should('be.true')
    }
    clickAdd() {
        cy.scrollTo('top')
        cy.get('.orangehrm-header-container > .oxd-button').click()
    }
}