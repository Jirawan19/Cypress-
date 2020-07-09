/// <reference types="cypress" />

const hello = (name, say) => console.log("hello: " + name + " say: " + say);
hello("in", "5555+");
hello("nam", "5555+");

const getAPI = (method, body, url = "") => {
 return cy.request({
    method,
    body,
    url: "https://jsonplaceholder.typicode.com/todos/" + url,
  });
};

it("Get All", () => getAPI("GET", null, "").then(rs => expect(rs.body.length).eq(200)));
it("Get 1", () => getAPI("GET", null, "1").then(rs => expect(rs.body.id).eq(1)));
it("Get 2", () => getAPI("GET", null, "2").then(rs => expect(rs.body.id).eq(2)));
