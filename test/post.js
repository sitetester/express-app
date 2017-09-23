var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('POST /api/posts', function() {
  it('Add a new post', function(done) {
    setTimeout(done, 300);
    api
      .post('/api/posts')
      .send('title=test title')
      .send('body=test body')
      .set('accept', 'json')
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');
      });
  });
});

describe('GET /api/posts', function() {
  it('Respond with array of json objects', function(done) {
    setTimeout(done, 300);
    api
      .get('/api/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.be.an('array').that.is.not.empty;
        expect(res.body[0]).to.be.an('object');
      });
  });
});
