var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('POST /api/users', function() {
  it('Add a new user', function(done) {
    setTimeout(done, 300);
    api
      .post('/api/users')
      .send('username=testuser')
      .send('password=testpass')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.be.an('object');
      });
  })
});
