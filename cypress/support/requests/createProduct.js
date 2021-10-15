Cypress.Commands.add("createProduct",
(token, nome, preco, descricao, quantidade) => {    
    cy.request({        
        method: 'POST',
        url: `${Cypress.env("apiUrl")}/produtos`,
        headers: { 
            "Authorization": token,
            accept: "application/json",
            "content-type": "application/json",
            
        }, 
        // authorization: {
        //     "Authorization": responseToken
        // }  ,
        failOnStatusCode: false,
        body: {
            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
        }
    });

})