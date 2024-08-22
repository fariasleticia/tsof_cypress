describe('Formulário cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    // teste de cadastro realizado com sucesso
    it('Usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('José da Silva')
        cy.getByData('email-input').type('ze90@email.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })

    // teste para verificar se o campo 'nome' está preenchido
    it('Não deve permitir o campo nome em branco', () => {
        cy.getByData('botao-cadastro').click()
        // cy.getByData('nome-input').type('')
        cy.getByData('email-input').type('joao@alura.com')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    })

    // teste para verificar se o campo 'email' está preenchido
    it('Não deve permitir o campo email em branco', () => {
        cy.getByData('botao-cadastro').click()
        // cy.getByData('nome-input').type('José da Silva')
        // cy.getByData('email-input').type('')
        cy.getByData('senha-input').type('4567898')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório') // Só funciona se a linha do nome estiver comentada
    })

    // teste para verificar se email inserido é válido
    it('Não deve permitir um e-mail inválido!', () => {
        cy.getByData('botao-cadastro').click()
        // cy.getByData('nome-input').type('José da Silva')
        cy.getByData('email-input').type('le@alura')
        cy.getByData('senha-input').type('456789')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido') // Só funciona se a linha do nome estiver comentada
    })

    // teste para verificar se o campo 'senha' está preenchido
    it('Não deve permitir o campo senha em branco', () => {
        cy.getByData('botao-cadastro').click()
        // cy.getByData('nome-input').type('José da Silva')
        cy.getByData('email-input').type('neiltona@alura.com')
        // cy.getByData('senha-input').type('')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de senha é obrigatório') // Não funciona, pois a mensagem de erro não existe. O site faz o cadastro do usuário mesmo sem digitar a senha.
    })
})
