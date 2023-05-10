const request = require('supertest');
const app = require('../app');

require("dotenv").config();

describe('GET /', () => {
  it('should return index page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  })
})