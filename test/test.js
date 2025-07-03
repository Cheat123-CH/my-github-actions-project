const request = require('supertest');
const app = require('../app'); // Make sure app.js exports the app

describe('GET /', function () {
  it('responds with Hello, GitHub Actions!', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello, GitHub Actions!', done);
  });
});
