describe('Keyboard Actions', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })

    it('uses keyboard keys', () => {

        cy.get('#userName')
            .type('Esther{enter}')

        cy.get('#userName')
            .type('{backspace}')

    })

})
