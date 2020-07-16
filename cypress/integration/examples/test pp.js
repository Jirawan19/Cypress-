/// <reference types="cypress" /> 

const getAPI = (body, method, url = "") => cy.request({
    url: "https://jsonplaceholder.typicode.com/todos/" + url,
    body,
    method
})

it("getAPI", () => {
    getAPI(null,"GET")
})


