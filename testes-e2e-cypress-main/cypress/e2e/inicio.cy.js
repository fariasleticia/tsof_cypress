describe('Página Principal', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/')
  })
  it('Deve renderizar h1 com o texto correto!', () => {
    cy.getByData('titulo-principal').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
  it('Deve renderizar h2 com o texto correto!', () => {
    cy.getByData('titulo-vantagens').contains('Vantagens do nosso banco:')
  })
  it('Deve renderizar o parágrafo com o texto correto!', () => {
    cy.getByData('vantagem3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })
})