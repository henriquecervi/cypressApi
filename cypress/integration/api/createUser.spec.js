/// <reference types="cypress" />

cy.faker = require('faker');
describe('Create a User Test', () => {
    it('Creating a new user', () => {
        cy.createUser()
    });
});