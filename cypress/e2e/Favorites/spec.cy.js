describe('template spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://api.disneyapi.dev/character?page=7&pageSize=50', { fixture: 'mock-data'})
    cy.visit('http://localhost:3000')
    cy.get('.more-info-button').first().click()
  })

  it('should be able to save a character to favorites', () => {
    cy.get('.favorite-star').click()
    cy.get('.view-favorites').first().click()
    cy.url().should('include', '/favorites')
    cy.get('.favorites-length').contains('You Have 1 Favorite Character')
    cy.get('h2').contains('Name: Aladar')
  })

  it('should be able to add multiple characters', () => {
    cy.get('.favorite-star').click()
    cy.get('.view-favorites').first().click()
    cy.url().should('include', '/favorites')
    cy.get('.header-image').first().click()
    cy.url().should('include', '/')
    cy.get('.more-info-button').last().click()
    cy.url().should('include', '/155')
    cy.get('h2').contains('Name: Aladar\'s Mother')
    cy.get('.favorite-star').click()
    cy.get('.view-favorites').first().click()
    cy.url().should('include', '/favorites')
    cy.get('.favorites-length').contains('You Have 2 Favorite Characters')
    cy.get('.favorite-character-card').should('have.length', 2)
  })

  it('should be able to delete a character from favorites', () => {
    cy.get('.favorite-star').click()
    cy.get('.view-favorites').first().click()
    cy.url().should('include', '/favorites')
    cy.get('button').click()
    cy.url().should('include', '/154')
    cy.get('.favorite-star').click()
    cy.get('.view-favorites').first().click()
    cy.get('.no-favorites-message').contains('You Have No Favorites')
  })
})