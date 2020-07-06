/// <reference types="cypress" />

context("todos API", () => {
  const initialItems = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  const getItems = (method, body) => {
    return cy.request({
      method,
      url: "https://jsonplaceholder.typicode.com/todos/1",
      body,
    });
  };

  it("returns JSON", () => {
    getItems()
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("returns JSON 2", () => {
    getItems().then((rs) => {
      expect(rs.headers).to.have.property(
        "content-type",
        "application/json; charset=utf-8"
      );
      expect(rs.headers["content-type"]).to.be.eq(
        "application/json; charset=utf-8"
      );
    });
  });

  it("loads 2 items", () => {
    getItems().its("allRequestResponses").should("length", 1);
  });

  it("check value", () => {
    // getItems().its("body.title").should("include",initialItems.title);
    getItems().its("body").should("include", initialItems);
  });

  it("delete value", () => {
    // getItems().its("body.title").should("include",initialItems.title);
    getItems("DELETE").then((rs) => {
      expect(rs.status).to.have.eq(200);
      expect(rs.headers.server).to.have.eq("cloudflare");
      expect(rs.headers["server"]).to.have.eq("cloudflare");
    });
  });

  it("create value", () => {
    // getItems().its("body.title").should("include",initialItems.title);
    const create = {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    };

    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/todos",
      body: create,
    }).then((rs) => {
      expect(rs.body)
      expect(rs.status).to.have.eq(201);
    });

    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/2",
    }).then((rs) => {
      expect(rs.body).to.have.eqls(create)
    });
    
  });
});
