Cypress.Commands.add("createUser",
(nome, email, password, administrador) => {    
    cy.request({        
        method: 'POST',
        url: `${Cypress.env("apiUrl")}/usuarios`,
        headers: { 
            accept: "application/json",
            "content-type": "application/json"
        },   
        failOnStatusCode: false,     
        body: {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
        }
    });

})