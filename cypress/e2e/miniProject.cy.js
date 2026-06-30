describe('Mini Project', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('completes the form', () => {

        cy.get('#firstName')
            .type('Esther')

        cy.get('#lastName')
            .type('Kazungu')

        cy.get('#userEmail')
            .type('esther@gmail.com')

        cy.get('label[for="gender-radio-2"]')
            .click()

        cy.get('#userNumber')
            .type('0712345678')

        cy.get('#submit')
            .scrollIntoView()

        cy.get('#submit')
            .click()

        cy.get('.modal-content')
            .should('be.visible')

        cy.get('.modal-content')
            .should('contain',
                'Thanks for submitting the form')

    })

})
