/// <reference types="cypress" /> 
// อ้างอิงถึง cypress

const hello = (name, say) => console.log("hello: " + name + " say: " + say);
// const=ตัวที่ไม่เปลี่ยนแปลง หัวข้อ  =>ตัวแปล hello = name + say +say
hello("in", "5555+");
// hello คือหัวข้อ = ตัวแปล ใส่แทนที่ name + say
hello("nam", "5555+");
// hello = ตัวแปล ใส่แทนที่ name + say
//

const getAPI = (method, body, url = "") => {
 return cy.request({
    method,
    body,
    url: "https://jsonplaceholder.typicode.com/todos/" + url,
  });
};
// หัวข้อ และตัวแปล

it("Get All", () => getAPI("GET", null, "").then(rs => expect(rs.body.length).eq(200)));
// หัวข้อ => คำสั่ง + ตังแปล .ดู rs => ตรวจเช็คว่าถูกหรือไม่
it("Get 1", () => getAPI("GET", null, "1").then(rs => expect(rs.body.id).eq(1)));
// หัวข้อ => คำสั่ง + ตังแปล .ดู rs => ตรวจเช็คว่าถูกหรือไม่
it("Get 2", () => getAPI("GET", null, "2").then(rs => expect(rs.body.id).eq(2)));
// หัวข้อ => คำสั่ง + ตังแปล .ดู rs => ตรวจเช็คว่าถูกหรือไม่
