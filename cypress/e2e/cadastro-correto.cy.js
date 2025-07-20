describe('página de cadastro', () => {

  beforeEach(() => {
    cy.viewport(1440, 900)
    cy.visit('https://adopet-frontend-cypress.vercel.app')
  })

  it('Preenchimento de cadastro', () => {

    // o usuário acessa a página de cadastro
    
    cy.contains('a', 'Cadastrar')
    .should('be.visible')
    .click()

    // o usuário preenche o campo nome
    cy.get('input[name="nome"]').type('Pamela Munhoz')

    // o usuário preenche o campo e-mail
    cy.get('input[name="email"]').type('pamelafmunhoz@gmail.com')

    // o usuário preenche o campo senha
    cy.get('input[name="password"]').type('Teste123')

    // o usuário preenche a mesma senha
    cy.get('input[name="confirm_password"]').type('Teste123')

    //clica no botao cadastrar
    cy.contains('button', 'Cadastrar')
    .should('be.visible')
    .click()  
  })

  it('Ver animais disponiveis para adoção', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Ver pets disponíveis para adoção')
    .click()
    cy.wait(2000)
    cy.contains('a', 'Falar com responsável')
    .click()
    cy.wait(2000)

    cy.get('.header__home')
    .click()    
  })

  it('Fazer login', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Fazer login')
    .click()   
  })

})