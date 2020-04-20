var request = require('supertest');
var server = require('../src/server')

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