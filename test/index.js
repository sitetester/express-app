var should = require('chai').should();
var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('GET /api', function() {
  it('should return a 200 response', function(done) {
    setTimeout(done, 300);
    api
      .get('/api')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.a('string');
        // assert.equal("Congrats! API is functional.", res.body);
      });
  })
});
