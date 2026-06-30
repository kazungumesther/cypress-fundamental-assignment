describe('Scrolling', () => {

    it('scrolls to bottom', () => {

        cy.visit('https://demoqa.com/automation-practice-form')

        cy.scrollTo('bottom')

        cy.scrollTo('top')

        cy.get('#submit')
            .scrollIntoView()

        cy.get('#submit')
            .should('be.visible')

    })

})
