Cypress.Commands.add("createProduct",
(nome, preco, descricao, quantidade) => {    
    cy.request({        
        method: 'POST',
        url: `${Cypress.env("apiUrl")}/produtos`,
        headers: { 
            accept: "application/json",
            "content-type": "application/json"
        },   
        failOnStatusCode: false,     
        body: {
            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
        }
    });

})