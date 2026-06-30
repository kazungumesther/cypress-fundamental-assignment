describe('Locators', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    })

    it('uses get', () => {
        cy.get('#userName').type('Esther')
    })

    it('uses contains', () => {
        cy.contains('Submit')
    })

    it('uses first and last', () => {
        cy.get('input').first()
        cy.get('input').last()
    })

    it('uses eq', () => {
        cy.get('input').eq(1)
    })

})
