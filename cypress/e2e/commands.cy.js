describe('Basic Commands', () => {

    it('uses basic commands', () => {

        cy.visit('https://demoqa.com/text-box')

        cy.get('#userName').type('Esther')

        cy.get('#userName').clear()

        cy.get('#userName').type('QA Student')

        cy.get('#submit').click()

    })

})
