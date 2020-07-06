/// <reference types="cypress" />
context("todos API", () => {
  const item2 = {
    "id": 2,
    "nickName": "Nan",
    "firstName": "Nan",
    "lastName": "Nan",
    "position": "CMO",
    "leader": null,
    "team": {
        "id": 1,
        "name": "Chief"
    },
    "address": {
        "id": 10,
        "province": "กรุงเทพ",
        "district": "เขตหนองจอก",
        "subDistrict": "ลำผักชี",
        "postalCode": "10530",
        "other": ""
    }
};    

  const getItems = (method, url = "", body) => {
    return cy.request({
      method,
      url: "127.0.0.1:8080//autopair/api/v1//Members/" + url,
      body,
    });
  };

  it("test GET all", () => {
    // getItems("GET", "", null);
    getItems().then(rs => {
      expect(rs.status).to.have.eq(200)
    });
  });

  it("test GET by id", () => {
    getItems("GET", "2", null).then(rs => {
      expect(rs.body).to.have.eqls(item2);
    })
  });

  it("test POST", () => {
    const body = {
      "id": 99,
      "nickName": "Nan",
      "firstName": "Nan",
      "lastName": "Nan",
      "position": "CMO",
      "leader": null,
      "team": {
          "id": 1,
          "name": "Chief"
      },
      "address": {
          "id": 99,
          "province": "กรุงเทพ",
          "district": "เขตหนองจอก",
          "subDistrict": "ลำผักชี",
          "postalCode": "10530",
          "other": ""
      }
  };      
  
    getItems("POST", "", body).then(rs => {
      expect(rs.body)
    })
  });

  it("test PATCH", () => {  
    getItems("PATCH", "99/position/kuy", null).then(rs => {
      expect(rs.status).to.have.eq(200)
    })
    getItems("GET", "99", null).then(rs => {
      expect(rs.body.position).to.have.eq("kuy")
    })
  });

  it("test PUT", () => {
    const body = {
      "id": 99,
      "nickName": "rrrr",
      "firstName": "Nan",
      "lastName": "Nan",
      "position": "CMO",
      "leader": null,
      "team": {
          "id": 1,
          "name": "Chief"
      },
      "address": {
          "id": 99,
          "province": "กรุงเทพ",
          "district": "เขตหนองจอก",
          "subDistrict": "ลำผักชี",
          "postalCode": "10530",
          "other": ""
      }
  };    
  
    getItems("PUT", "", body).then(rs => {
      expect(rs.status).to.have.eq(200)
    })

    getItems("GET", "99", null).then(rs => {
      expect(rs.body).to.have.eqls(body)
    })
  });
});
