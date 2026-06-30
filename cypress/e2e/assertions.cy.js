describe('Assertions', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })

    it('checks visibility', () => {
        cy.get('#userName').should('be.visible')
    })

    it('checks existence', () => {
        cy.get('#submit').should('exist')
    })

    it('checks attribute', () => {
        cy.get('#userName')
            .should('have.attr', 'placeholder')
    })

})
