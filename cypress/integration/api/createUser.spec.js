/// <reference types="cypress" />

let bodyData

describe('Create a User Test', () => {   
    beforeEach(() => {       
        cy.generateFixture('users')
        cy.fixture('users.json').then(users => {
            bodyData = users
        })
    })

    it('Creating a new user', () => {
        cy.createUser( 
            bodyData.dinamicData[1].nome,
            bodyData.dinamicData[1].email,
            bodyData.dinamicData[1].password,
            bodyData.dinamicData[1].administrador
            )
    });
});