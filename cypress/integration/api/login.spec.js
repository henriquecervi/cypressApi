/// <reference types="cypress" />

let token
let bodyData

before(() => {
	cy.generateFixture()
        cy.fixture('users.json').then(users => {
            bodyData = users
        })        
})
describe("Login", () => {
    it("Log into application", () => {

        cy.createUser(
            bodyData.userData[0].nome,
            bodyData.userData[0].email,
            bodyData.userData[0].password,
            bodyData.userData[0].administrador
            )
        
        cy.request({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/login`,
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: {
                "email": bodyData.userData[0].email,
                "password": bodyData.userData[0].password
            }

        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.equal("Login realizado com sucesso")
            token = (response.body.authorization)
        })
    })

    it('Login with Cypress Commands', () => {
        cy.login(bodyData.userData[0].email,
            bodyData.userData[0].password)
            .should((response => {
                expect(response.status).to.eq(200)
            }))
    });
})