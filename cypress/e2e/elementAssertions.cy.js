describe('Assertions Practice', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
  })

  it('checks values', () => {

    cy.get('#userName')
      .type('Esther')
      .should('have.value', 'Esther')

    cy.get('#submit')
      .should('be.visible')

    cy.get('#submit')
      .should('exist')

  })

})
