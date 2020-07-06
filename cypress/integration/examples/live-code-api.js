/// <reference types="cypress" />

context("main test", () => {
  const reqAPI = (method, url, body) => {
    return cy.request({
      method,
      url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
      body,
    });
  };

  it("GET All", () => {
    reqAPI("GET", "").then((rs) => expect(rs.status).eq(200));
  });
  it("GET one by id", () => {
    reqAPI("GET", "1").then((rs) => expect(rs.body.name).eq("Chief"));
  });
  it("POST", () => {
    reqAPI("POST", "", {
      name: "new-team",
    });
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("GET", id).then(rs => expect(rs.body.name).eq("new-team"));
    });
  });
  it("PUT", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("PUT", "", {
        id: id,
        name: "puted",
      });
      reqAPI("GET", id).then(rs => expect(rs.body.name).eq("puted"));
    });
  });
  it("PATCH", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("PATCH", id + "/name/patched");
      reqAPI("GET", id).then(rs => expect(rs.body.name).eq("patched"));
    });
  });
  it("DELETE", () => {
    reqAPI("GET", "").then((rs) => {
      const id = rs.body[rs.body.length - 1].id;
      reqAPI("DELETE", "" + id);
    });
  });
});

context("main test", () => {
    const reqAPI = (method, url, body) => {
      return cy.request({
        method,
        url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
        body,
      });
    };
  
    it("GET All", () => {
      reqAPI("GET", "").then((rs) => expect(rs.status).eq(200));
    });
    it("GET one by id", () => {
      reqAPI("GET", "1").then((rs) => expect(rs.body.name).eq("Chief"));
    });
    it("POST", () => {
      reqAPI("POST", "", {
        name: "new-team",
      });
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("new-team"));
      });
    });
    it("PUT", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PUT", "", {
          id: id,
          name: "puted",
        });
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("puted"));
      });
    });
    it("PATCH", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PATCH", id + "/name/patched");
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("patched"));
      });
    });
    it("DELETE", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("DELETE", "" + id);
      });
    });
  });

  context("main test", () => {
    const reqAPI = (method, url, body) => {
      return cy.request({
        method,
        url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
        body,
      });
    };
  
    it("GET All", () => {
      reqAPI("GET", "").then((rs) => expect(rs.status).eq(200));
    });
    it("GET one by id", () => {
      reqAPI("GET", "1").then((rs) => expect(rs.body.name).eq("Chief"));
    });
    it("POST", () => {
      reqAPI("POST", "", {
        name: "new-team",
      });
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("new-team"));
      });
    });
    it("PUT", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PUT", "", {
          id: id,
          name: "puted",
        });
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("puted"));
      });
    });
    it("PATCH", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PATCH", id + "/name/patched");
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("patched"));
      });
    });
    it("DELETE", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("DELETE", "" + id);
      });
    });
  });

  context("main test", () => {
    const reqAPI = (method, url, body) => {
      return cy.request({
        method,
        url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
        body,
      });
    };
  
    it("GET All", () => {
      reqAPI("GET", "").then((rs) => expect(rs.status).eq(200));
    });
    it("GET one by id", () => {
      reqAPI("GET", "1").then((rs) => expect(rs.body.name).eq("Chief"));
    });
    it("POST", () => {
      reqAPI("POST", "", {
        name: "new-team",
      });
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("new-team"));
      });
    });
    it("PUT", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PUT", "", {
          id: id,
          name: "puted",
        });
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("puted"));
      });
    });
    it("PATCH", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PATCH", id + "/name/patched");
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("patched"));
      });
    });
    it("DELETE", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("DELETE", "" + id);
      });
    });
  });

  context("main test", () => {
    const reqAPI = (method, url, body) => {
      return cy.request({
        method,
        url: "127.0.0.1:8080/autopair/api/v1/Teams/" + url,
        body,
      });
    };
  
    it("GET All", () => {
      reqAPI("GET", "").then((rs) => expect(rs.status).eq(200));
    });
    it("GET one by id", () => {
      reqAPI("GET", "1").then((rs) => expect(rs.body.name).eq("Chief"));
    });
    it("POST", () => {
      reqAPI("POST", "", {
        name: "new-team",
      });
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("new-team"));
      });
    });
    it("PUT", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PUT", "", {
          id: id,
          name: "puted",
        });
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("puted"));
      });
    });
    it("PATCH", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("PATCH", id + "/name/patched");
        reqAPI("GET", id).then(rs => expect(rs.body.name).eq("patched"));
      });
    });
    it("DELETE", () => {
      reqAPI("GET", "").then((rs) => {
        const id = rs.body[rs.body.length - 1].id;
        reqAPI("DELETE", "" + id);
      });
    });
  });
        