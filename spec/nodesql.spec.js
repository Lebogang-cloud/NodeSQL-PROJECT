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

let teboho = new Visitors(  1,
    "Teboho",
    22,
    "03-24-2020",
    "20:00",
    "Romeo",
    "He is very smart");

describe("functionality of the table in a database ", () => {
  it("should save the Visitor into the database ", () => {
    expect(visitor.addNewVisitor()).toEqual(1, "Teboho", 22, "03-24-2020", "20:00", "Romeo", "He is very smart");
  });

  it("should delete a visitor from the database", () => {
    expect(visitor.deleteVisitor(teboho).response.success).toBe(true);
  });

  it("should update a visitor's details on the database", () => {
    expect(visitor.updateVisitor(teboho).response.success).toBe(true);
  });

  it("should find visitor by ID on the database and return all information about that visitor", () => {
    expect(visitor.deleteAllVisitors(teboho).response.success).toBe(true);
  });

  it("should delete all visitors from the database", () => {
    expect(visitor.selectVisitor(teboho).response.success).toBe(true);
  });
});