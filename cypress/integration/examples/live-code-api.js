/// <reference types="cypress" />

context("main test", () => {
  const reqAPI = (method, url = "", body) => {
    return cy.request({
      method,
      url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
      body,
    });
  };

  it("GET All", () => {
    reqAPI("GET");
  });
  it("GET one by id", () => {
    reqAPI("GET", "1");
  });
  it("POST", () => {
    reqAPI("POST", "", {
      name: "new-team",
    });
  });
  it("PUT", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("PUT", "", {
        id: id,
        name: "puted",
      });
    });
  });
  it("PATCH", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("PATCH", id + "/name/patched");
    });
  });
  it("DELETE", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("DELETE", "" + id);
    });
  });
});
