const Visitors = require("../src/index");
const config = require("config");
const server = require("../src/server");

<<<<<<< HEAD
=======
let teboho = new Visitors(
  1,
  "Teboho",
  22,
  "03-24-2020",
  "20:00",
  "Romeo",
  "He is very smart"
);
>>>>>>> e6210c0860b0a2ccd12f84b7c59c6bb5a9c6aa9e

describe("visitor's function have been defined", () => {
  it("should check if deleteVisitor is defined", () => {
    expect(teboho.deleteVisitor).toBeDefined();
  });

  it("should check if updateVisitor is defined", () => {
    expect(teboho.updateVisitor).toBeDefined();
  });

  it("should check if deleteAllVisitors is defined", () => {
    expect(teboho.deleteAllVisitors).toBeDefined();
  });

  it("should check if selectVisitor is defined", () => {
    expect(teboho.selectVisitor).toBeDefined();
  });
});

describe("check if methods/ function adds a visitor ", () => {
  it("should spy on addNewVisitor ", () => {
    spyOn(teboho, "addNewVisitor");
  });

  it("should spy on whether the a visitor's detail's are updated", () => {
    spyOn(teboho, "updateVisitor");
  });
});
<<<<<<< HEAD

=======
>>>>>>> e6210c0860b0a2ccd12f84b7c59c6bb5a9c6aa9e
