describe('template spec', () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'https://api.disneyapi.dev/character?page=7&pageSize=50', { fixture: 'mock-data'})
    cy.visit('http://localhost:3000')
    cy.get('.more-info-button').first().click()
  })

  it('should let the user view details and take to a new url', () => {
    cy.url().should('include', '/154')
  })

  it('should have an image that is visible', () => {
    cy.get('.character-portrait').should('be.visible')
  })

  it('should display a details box', () => {
    cy.get('.single-character-details')
  })

  it('should have the correct details', () => {
    cy.get('h2').contains('Name: Aladar')
    cy.get('h3').first().contains('Films: Dinosaur')
    cy.get('h3').last().contains('Enemies:')
  })

  it('should have a favoriting star', () => {
    cy.get('.favorite-star').should('be.visible')
  })

  it('should be able to view favorites when they click Oswald', () => {
    cy.get('#oswald').click()
    cy.url().should('include', '/favorites')
  })

  it('should be able to click the favoriting star, then it should render in favorites', () => {
    cy.get('.favorite-star').click()
    cy.get('#oswald').click()
    cy.url().should('include', '/favorites')
    cy.get('.favorites-length').contains('You Have 1 Favorite Character')
    cy.get('h2').last().contains('Name: Aladar')
    cy.get('h4').contains('Films: Dinosaur')
    cy.get('button').should('be.visible')
  })

  it('should be able to go back and view character details from the favorites page', () => {
    cy.get('.favorite-star').click()
    cy.get('#oswald').click()
    cy.url().should('include', '/favorites')
    cy.get('button').click()
    cy.url().should('include', '/154')
  })

  it('should unfavorite and be unadded from favorites', () => {
    cy.get('.favorite-star').click()
    cy.get('#oswald').click()
    cy.url().should('include', '/favorites')
    cy.get('button').click()
    cy.url().should('include', '/154')
    cy.get('.favorite-star').click()
    cy.get('#oswald').click()
    cy.url().should('include', '/favorites')
    cy.get('.no-favorites-message').contains('You Have No Favorites')
  })

  it('should be able to click the castle and go back to the main page', () => {
    cy.get('.header-image').first().click()
    cy.get('.overlay-content').should('be.visible')
  })

})