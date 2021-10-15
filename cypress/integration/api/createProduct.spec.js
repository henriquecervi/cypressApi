/// <reference types="cypress" />

let user
let product
var responseToken


before(() => {
    cy.generateFixture()
        cy.fixture('users.json').then(users => {
            user = users
        }) 

	cy.productFixture()
        cy.fixture('newProduct.json').then(newProduct => {
            product = newProduct
        })        
})
describe('Product Test', () => {

    before(() => {
        cy.createUser( 
            user.userData[0].nome,
            user.userData[0].email,
            user.userData[0].password,
            user.userData[0].administrador
         )
        
        cy.login(user.userData[0].email,
            user.userData[0].password)
            .should((response) => {
                responseToken = (response.body.authorization)                
            }) 
    })
    it("Include a product in store", () => {                 

        cy.createProduct(responseToken,
            product.productData[0].nome,
            product.productData[0].preco,
            product.productData[0].descricao,
            product.productData[0].quantidade
        ).should((response) => {
            expect(response.status).to.eq(201)
            //expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        })
    })
    
});


