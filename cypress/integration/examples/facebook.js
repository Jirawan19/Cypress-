/// <reference types="cypress" />
context("todos API", () => {
  const initialItems = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  const getItems = () => {
    return cy.request("https://jsonplaceholder.typicode.com/todos/1");
  };

  it("returns JSON", () => {
    getItems()
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("loads 2 items", () => {
    getItems().its("allRequestResponses").should("length", 1);
  });

  it("check value", () => {
    // getItems().its("body.title").should("include",initialItems.title);
    getItems().its("body").should("include",initialItems);
  });
});
