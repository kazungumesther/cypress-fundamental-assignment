describe('Tables', () => {

    it('checks table data', () => {

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#productTable tbody tr')
            .should('have.length.greaterThan', 1)

        cy.get('#productTable tbody tr')
            .first()
            .should('contain', 'Laptop')

    })

})
