describe('Testando múltiplas páginas', () => {
    beforeEach('Deve acessar a página e realizar login', () => {
        cy.visit('/')
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()
    })
    
    it('Deve conseguir acessar a página de cartões', () => {
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })

    it('Deve conseguir acessar a página de serviços', () => {
        cy.getByData('app-home').find('a').eq(2).click()
        cy.getByData('servicos').should('exist').and('have.descendants', 'h5', 'img')
        cy.getByData('servico').should('exist').and('contain', 'Pix')
    })

    it('Deve conseguir acessar a página de investimentos', () => {
        cy.getByData('app-home').find('a').eq(3).click()
        cy.getByData('titulo-investimento').should('exist').and('have.text', 'Investimentos')
    })

    it('Deve conseguir acessar a página inicial', () => {
        cy.getByData('app-home').find('a').eq(0).click()
        cy.getByData('titulo-transacao').should('exist').and('have.text', 'Nova Transação')
    })
})