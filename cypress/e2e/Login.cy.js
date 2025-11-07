describe('Teste Login', () => {
  it('Login Válido', () => {
    cy.visit('https://www.saucedemo.com')
    const usuario = 'standard_user'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
  })

 it('Login Usuário Inválido', () => {
    cy.visit('https://www.saucedemo.com')
    const usuario = 'Teste2'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
    cy.should('be.visible')
    cy.and('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

  it('Login e logout', () => {
    cy.visit('https://www.saucedemo.com')
    const usuario = 'standard_user'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[id="react-burger-menu-btn"]').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

  })
})