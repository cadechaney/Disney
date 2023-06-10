describe('template spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.disneyapi.dev/character?page=7&pageSize=50', { fixture: 'mock-data'})
    cy.visit('http://localhost:3000')
  })

  it('should display the header', () => {
    cy.get('.header').should('be.visible');
  })

  it('should contain the correct content', () => {
    cy.get('.app-title').contains('Disney Character Discovery')
    cy.get('.view-favorites').should('be.visible')
    cy.get('.header-image').should('be.visible')
  })

  it('should have an image from the character', () => {
    cy.get('.character-image').should('be.visible')
  })

  it('should have a view info button below it', () => {
    cy.get('.more-info-button').first().should('be.visible')
  })

  it('should render an error page if there is one', () => {
    cy.visit('http://localhost:3000/error')
    cy.get('h1').contains('Click the Castle to View Other Characters')
    .should('be.visible')
  })
})