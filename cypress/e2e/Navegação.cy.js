describe('Navegando no menu', () => {
  it('Navegação no menu', () => {
    cy.visit('https://www.saucedemo.com')
    const usuario = 'standard_user'
    const senha = 'secret_sauce'

    
    cy.get('[data-test="username"]').type(usuario)
    cy.get('[data-test="password"]').type(senha)
    cy.get('[data-test="login-button"]').click()

    cy.get('[id="react-burger-menu-btn"]').click()
    cy.get('[data-test="inventory-sidebar-link"]').click()
 })
})   