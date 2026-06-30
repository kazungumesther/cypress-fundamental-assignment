describe('Browser Actions', () => {

    it('reloads page', () => {

        cy.visit('https://demoqa.com')

        cy.reload()

    })

    it('goes back and forward', () => {

        cy.visit('https://demoqa.com')

        cy.go('back')

        cy.go('forward')

    })

})
