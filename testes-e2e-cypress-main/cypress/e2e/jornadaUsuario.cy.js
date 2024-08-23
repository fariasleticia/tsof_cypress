describe('Jornadas de usuário', () => {
    it('Deve permitir que o usuário acesse a aplicação, realize uma transferência e faça logout', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')

        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq','/')
    })

    it('Deve permitir que o usuário acesse a aplicação, realize um depósito e faça logout', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('select-opcoes').select('Depósito')
        cy.getByData('form-input').type('200')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('R$ 200')

        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq','/')
    })
})