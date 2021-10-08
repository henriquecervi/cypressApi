/// <reference types="cypress" />

let token
let massaDados

beforeEach(() => {
	cy.fixture("login.json").then(login => {
		massaDados = login
	})
})

describe("Login", () => {
    it("Log into application", () => {
        cy.request({
            method: "POST",
           // url: "https://serverest.dev/login",
            url: `${Cypress.env("apiUrl")}/login`,
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: {
                "email": massaDados.login1.email,
                "password": massaDados.login1.password
                // "email": "henrique@teste.com.br",
                // "password": "pwd123"
            }

        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.equal("Login realizado com sucesso")
            token = (response.body.authorization)
        })
    })

    it('Login with Cypress Commands', () => {
        cy.login(massaDados.login1.email,
            massaDados.login1.password)
    });

    it.skip("Include a product in store", () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.env("apiUrl")}/produtos`,
            headers: { 
                accept: "application/json",
                "content-type": "application/json",
                "Authorization": token
            },
            failOnStatusCode: false,
            body: {                
                    "nome": "Mouse Gamer Xpto2",
                    "preco": 1447,
                    "descricao": "Mouse",
                    "quantidade": 5                  
            }
        }).should((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        })
    })
})