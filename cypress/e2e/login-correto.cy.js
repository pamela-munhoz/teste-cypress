describe ('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
        cy.get('[data-test="login-button"]')
    .click()       

    })



    //realiza login corretamente
    it('Realiza login corretamente', () => {        
    cy.login('pamelafmunhoz@gmail.com', 'Teste123')
    })

})