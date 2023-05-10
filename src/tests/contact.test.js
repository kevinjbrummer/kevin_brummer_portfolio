const request = require('supertest');
const app = require('../app');

require("dotenv").config();

describe('POST /', () => {
  it('should return index page', async () => {
    const res = await request(app).post('/');
    expect(res.statusCode).toBe(400);
  })
})