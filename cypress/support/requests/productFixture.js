Cypress.Commands.add('productFixture', () => {
    const faker = require('faker')

    cy.writeFile('cypress/fixtures/newProduct.json',  {
      'productData':Cypress._.times(2, () => {
        return  {
          'nome':`${faker.commerce.productName()}`,
          'preco': `${faker.finance.amount(100, 5000, 0)}`,
          'descricao': `${faker.commerce.productDescription()}`,
          'quantidade': `${faker.datatype.number(20)}`        
        }
      })
    })
  })