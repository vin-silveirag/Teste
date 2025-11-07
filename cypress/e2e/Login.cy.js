describe('Teste Login', () => {

  beforeEach(() => {
    //cy.viewport(1179, 2556);
    cy.visit('https://www.saucedemo.com')
  });
  
  it('Login Válido', () => {
    const usuario = 'standard_user'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
  })

 it('Login Usuário Inválido', () => {
    const usuario = 'Teste2'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

  it('Login e logout', () => {
    const usuario = 'standard_user'
    const senha = 'secret_sauce'

    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()
    cy.get('[id="react-burger-menu-btn"]').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

  })
})