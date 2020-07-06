/// <reference types="cypress" />
context("test api team", () => {
  it("get all values", () => {
    cy.request({
      method: "GET",
      url: "127.0.0.1:8080/autopair/api/v1//Teams",
    }).then((rs) => {
      expect(rs.status).to.have.eq(200);
    });
  });

  it("create/add value(POST)", () => {
    cy.request({
      method: "POST",
      url: "127.0.0.1:8080/autopair/api/v1//Teams",
      body: { name: "testname" },
    });
  });

  it("GET by id check for create/add value (POST)", () => {
    cy.request({
      method: "GET",
      url: "127.0.0.1:8080/autopair/api/v1//Teams/10",
    }).then((rs) => {
      expect(rs.body.name).to.have.eq("testname");
    });
  });

  it("edit some value(PATCH)", () => {
    cy.request({
      method: "PATCH",
      url: "127.0.0.1:8080/autopair/api/v1//Teams/10/name/patched",
    });
  });

  it("GET by id check for edit some value(PATCH)", () => {
    cy.request({
      method: "GET",
      url: "127.0.0.1:8080/autopair/api/v1//Teams/10",
    }).then((rs) => {
      expect(rs.body.name).to.have.eq("patched");
    });
  });

  it("replace all value(PUT)", () => {
    cy.request({
      method: "PUT",
      url: "127.0.0.1:8080/autopair/api/v1//Teams",
      body: { id: 10, name: "puted" },
    });
  });

  it("GET by id check for replace all value(PUT)", () => {
    cy.request({
      method: "GET",
      url: "127.0.0.1:8080/autopair/api/v1//Teams/10",
    }).then((rs) => {
      expect(rs.body.name).to.have.eq("puted");
    });
  });

  it("create/add value for delete", () => {
    cy.request({
      method: "POST",
      url: "127.0.0.1:8080/autopair/api/v1//Teams",
      body: { name: "forDelete" },
    }).then((rs) => {
      expect(rs.status).to.have.eq(200);
      cy.request({
        method: "GET",
        url: "127.0.0.1:8080/autopair/api/v1//Teams/" + rs.body.id,
      }).then((rs) => {
        expect(rs.body.name).to.have.eq("forDelete");
      });
      cy.request({
        method: "DELETE",
        url: "127.0.0.1:8080/autopair/api/v1//Teams/" + rs.body.id,
      }).then((rs) => {
        expect(rs.status).to.have.eq(200);
      });
    });
  });

  it("change name to testname, for Loop test not errors", () => {
    cy.request({
      method: "PATCH",
      url: "127.0.0.1:8080/autopair/api/v1//Teams/10/name/testname",
    }).then((rs) => {
      expect(rs);
    });
  });
});
