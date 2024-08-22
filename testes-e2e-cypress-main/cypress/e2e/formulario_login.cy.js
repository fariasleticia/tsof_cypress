describe('Validação do login', () => {
    it.only('Não deve permitir um campo em branco', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        // cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist') //.and('have-text', 'O campo email é obrigatório')
    })

    it.only('Não deve permitir um campo em branco', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        // cy.getByData('senha-input').type('')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist') //.and('have-text', 'O campo email é obrigatório')
    })
})