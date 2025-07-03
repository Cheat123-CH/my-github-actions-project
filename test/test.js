const request = require('supertest');
const app = require('../app');

// In your test file (test/test.js)
describe('GET /', () => {
  it('responds with Hello, GitHub Actions!', () => {
    // Your existing test
  });

  // Add a new test case
  it('responds with 404 for unknown routes', async () => {
    await request(app)
      .get('/nonexistent-route')
      .expect(404);
  });
});


