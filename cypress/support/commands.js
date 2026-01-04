Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('addProductToCart', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click()
})