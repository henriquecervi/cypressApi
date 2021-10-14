Cypress.Commands.add('generateFixture', () => {
    const faker = require('faker')

    cy.writeFile('cypress/fixtures/users.json',  {
      'userData':Cypress._.times(2, () => {
        return  {
          'nome':`${faker.name.firstName()} ${faker.name.lastName()}`,
          'email': `${faker.internet.email()}`,
          'password': `${faker.internet.password()}`,
          'administrador': `${faker.datatype.boolean(false)}`        
        }
      })
    })
  })