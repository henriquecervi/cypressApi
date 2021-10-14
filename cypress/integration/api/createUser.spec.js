/// <reference types="cypress" />

let bodyData
let testeNome

describe('Create a new user Test', () => {   
    before(() => {       
        cy.generateFixture()
        cy.fixture('users.json').then(users => {
            bodyData = users
        })
    })

    it('Creating a new user', () => {
        cy.createUser( 
   //         testeNome,
            bodyData.userData[1].nome,
            bodyData.userData[1].email,
            bodyData.userData[1].password,
            bodyData.userData[1].administrador
            )
    });
});