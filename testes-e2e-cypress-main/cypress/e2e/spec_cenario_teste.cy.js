describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
})

describe('Página Principal', () => {
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})