/// <Reference types="cypress"/>

describe('Funcionalidade: login', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('deve fazer login com sucesso', () => {
       
        cy.get('#username').type('rafa.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, rafa.teste (não é rafa.teste? Sair)')

    })

    it('Deve exibir uma mensagem de erro com senha invalida', () => {
        
        cy.get('#username').type('rafa.teste@teste.com.br')
        cy.get('#password').type('test')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail rafa.teste@teste.com.br está incorreta. Perdeu a senha?')


    });

    it('Deve exibir mensagem de erro com usuario invalido', () => {
        
        cy.get('#username').type('rsafs.teste@teste.com.br')
        cy.get('#password').type('teste@ebac.com.br')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('exist')



    });
});