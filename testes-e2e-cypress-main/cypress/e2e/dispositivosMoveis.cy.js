describe('Testando dispositivos móveis', () => {
    it('Deve existir um menu burguer', () => {
        cy.viewport(550, 750) /* Configura o tamanho da janela para 550px x 750px */
        cy.viewport('iphone-6') /* Configura o tamanho da janela para 375px x 667px */
        
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')
    })
})

describe('Menu de navegação', () => {
    context('Resolução de 720p', () => {
      beforeEach(() => {
        cy.viewport(1280, 720) /* roda os testes como em um monitor com 720p de resolução */
      })

      it('Deve existir um menu burguer', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')
      })
    })

    context('Resolução do Iphone 5 ', () => {
      beforeEach(() => {
        cy.viewport('iphone-5') /* roda os testes como em um dispositivo com a resolução de um Iphone 5 */
      })

      it('Deve existir um menu burguer', () => {
        cy.visit('/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('neilton@alura.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click()
        cy.getByData('menu-lateral').find('a').eq(3).click()

        cy.location('pathname').should('eq', '/home/investimentos')

        cy.viewport('iphone-6', 'landscape')
      })
    })
  })