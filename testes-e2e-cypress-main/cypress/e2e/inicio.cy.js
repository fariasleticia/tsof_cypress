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

  it('Deve renderizar h3 - vantagem 1 - com o subtítulo correto!', () => {
    cy.getByData('subtitulo1').contains('Conta e cartão gratuitos')
  })
  it('Deve renderizar parágrafo - vantagem 1 - com o texto correto!', () => {
    cy.getByData('vantagem1').contains('Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.')
  })

  it('Deve renderizar h3 - vantagem 2 - com o subtítulo correto!', () => {
    cy.getByData('subtitulo2').contains('Saques sem custo')
  })
  it('Deve renderizar parágrafo - vantagem 2 - com o texto correto!', () => {
    cy.getByData('vantagem2').contains('Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.')
  })

  it('Deve renderizar h3 - vantagem 3 - com o subtítulo correto!', () => {
    cy.getByData('subtitulo3').contains('Programa de pontos')
  })
  it('Deve renderizar o parágrafo com o texto correto!', () => {
    cy.getByData('vantagem3').contains('Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!')
  })

  it('Deve renderizar h3 - vantagem 4 - com o subtítulo correto!', () => {
    cy.getByData('subtitulo4').contains('Seguro Dispositivos')
  })
  it('Deve renderizar o parágrafo com o texto correto!', () => {
    cy.getByData('vantagem4').contains('Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.')
  })
  
  it('Deve renderizar todas as imagens', () => {
    cy.getByData('imagem').should("be.visible")
  })
})