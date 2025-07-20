describe('Página de cadastro', ()=> {
    
it('Realiza o cadastro de forma incorreta', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.get('[data-test="register-button"]')
    .click()
    cy.get('[data-test="submit-button"]')
    .click()
    cy.contains('É necessário informar um endereço de email')
    .should('be.visible')
    cy.contains('Crie uma senha')
    .should('be.visible')
    cy.contains('Repita a senha criada acima')
    .should('be.visible')

})
})