/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('Check if page is rendered', () => {
        cy.get('code').should('contain', 'HomePage')
    })
})
