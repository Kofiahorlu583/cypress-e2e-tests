describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password)
    })
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('should show error with invalid credentials', () => {
    cy.login('invalid_user', 'wrong_password')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface')
  })

  it('should show error with empty username', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
  })

  it('should handle locked out user', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.lockedUser.username, users.lockedUser.password)
    })
    cy.get('[data-test="error"]')
      .should('contain', 'locked out')
  })
})describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password)
    })
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('should show error with invalid credentials', () => {
    cy.login('invalid_user', 'wrong_password')
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface')
  })

  it('should show error with empty username', () => {
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
  })

  it('should handle locked out user', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.lockedUser.username, users.lockedUser.password)
    })
    cy.get('[data-test="error"]')
      .should('contain', 'locked out')
  })
})