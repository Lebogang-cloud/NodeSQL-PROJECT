const Visitors = require("../src/index");

let visitor = new Visitors(
  1,
  "Teboho",
  22,
  "03-24-2020",
  "20:00",
  "Romeo",
  "He is very smart"
);

let teboho = new Visitors(1,
    "Teboho",
    22,
    "03-24-2020",
    "20:00",
    "Romeo",
    "He is very smart");

describe("visitor's function have been defined", () => {
  it("should check if deleteVisitor is defined", () => {
    expect(visitor.deleteVisitor).toBeDefined();
  });

  it("should check if updateVisitor is defined", () => {
    expect(teboho.updateVisitor).toBeDefined();
  });

  it("should check if deleteAllVisitors is defined", () => {
    expect(visitor.deleteAllVisitors).toBeDefined();
  });

  it("should check if selectVisitor is defined", () => {
    expect(teboho.selectVisitor).toBeDefined();
  });
});

describe("check if methods/ function adds a visitor ", () => {
  it("should spy on addNewVisitor ", () => {
    spyOn(visitor, "addNewVisitor");
  });

  it("should spy on whether the a visitor's detail's are updated", () => {
    spyOn(teboho, "updateVisitor");
  });
});