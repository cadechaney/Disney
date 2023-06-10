describe('template spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.disneyapi.dev/character?page=7&pageSize=50', { fixture: 'mock-data'})
    cy.visit('http://localhost:3000')
  })

  it('passes', () => {
    
  })
})