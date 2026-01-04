describe('Products Page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password)
    })
  })

  it('should display all products', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('should add product to cart', () => {
    cy.addProductToCart('Sauce Labs Backpack')
    cy.get('.shopping_cart_badge').should('contain', '1')
  })

  it('should add multiple products to cart', () => {
    cy.addProductToCart('Sauce Labs Backpack')
    cy.addProductToCart('Sauce Labs Bike Light')
    cy.get('.shopping_cart_badge').should('contain', '2')
  })

  it('should remove product from cart', () => {
    cy.addProductToCart('Sauce Labs Backpack')
    cy.get('.shopping_cart_badge').should('contain', '1')
    
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('button')
      .click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})