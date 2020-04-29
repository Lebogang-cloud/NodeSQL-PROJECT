var request = require('supertest');
var server = require('../src/server')
var config = require('config')
const Visitors = require("../src/index");

let visitor = new Visitors(1,
  "Teboho",
  22,
  "03-24-2020",
  "20:00",
  "Romeo",
  "He is very smart");

describe('loading express', function () {
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/view_visitor:id')
      .expect(404, done);
  });
});

describe("Visitors", () => {
  it("should check if addNewVisitor has been defined", () =>{
      expect(visitor.addNewVisitor).toBeDefined();
  });

  it('should check if updatevisitor is defined', () => {

    expect(visitor.updateVisitor).toBeDefined()
  });
});

describe('server', () =>{
  const port = server.address().port
  it('should test that server is running current port', async() => {
    expect(server.port).toEqual()
  })
  
});