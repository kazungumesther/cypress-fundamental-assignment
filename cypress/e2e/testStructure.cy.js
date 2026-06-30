describe('Test Structure', () => {

    before(() => {
        cy.log('Runs once before all tests')
    })

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })

    afterEach(() => {
        cy.log('Test completed')
    })

    after(() => {
        cy.log('All tests finished')
    })

    it('fills the text box form', () => {
        cy.get('#userName').type('Esther')
        cy.get('#userEmail').type('esther@gmail.com')
    })

})
