Cypress.Commands.add("login",
(email, password) => {    
    cy.request({        
        method: 'POST',
        url: `${Cypress.env("apiUrl")}/login`,
        headers: { 
            accept: "application/json",
            "content-type": "application/json"
        },   
        failOnStatusCode: false,     
        body: {
            "email": email,
            "password": password
        }
    });

})