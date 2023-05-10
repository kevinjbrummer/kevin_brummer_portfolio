const request = require('supertest');
const app = require('../app');

require("dotenv").config();


describe('POST /', () => {
  it('should return 200 status', async () => {
    const res = await request(app).post('/').send({
      name: 'Sterling Archer',
      email: 'foo@bar.com',
      message: 'Hello There!'
    });
    expect(res.statusCode).toBe(200);
  });

  it('should return error when name is empty', async () => {
    const res = await request(app).post('/').send({
      name: "",
      email: "foo@bar.com",
      message: 'Hello There!'
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['name']).toBe('Please enter a name');
  });

  it('should return error when name is longer than 255 characters', async () => {
    const res = await request(app).post('/').send({
      name: "a".repeat(256),
      email: "foo@bar.com",
      message: 'Hello There!'
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['name']).toBe('Name must be 255 characters or fewer');
  });

  it('should return error when email is empty', async () => {
    const res = await request(app).post('/').send({
      name: "Kevin Brummer",
      email: "",
      message: 'Hello There!'
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['email']).toBe('Please enter an email');
  });

  it('should return error when email format is incorrect', async () => {
    const res = await request(app).post('/').send({
      name: "Kevin Brummer",
      email: "kevin",
      message: 'Hello There!'
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['email']).toBe('Email format is incorrect');
  });

  it('should return error when email is longer than 255 char', async () => {
    const res = await request(app).post('/').send({
      name: "Kevin Brummer",
      email: "a".repeat(248) + "@bar.com",
      message: 'Hello There!'
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['email']).toBe('Email must be 255 characters or fewer');
  });

  it('should return error when message is empty', async () => {
    const res = await request(app).post('/').send({
      name: "Kevin Brummer",
      email: "foo@bar.com",
      message: ""
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['message']).toBe('Please enter a message');
  });

  it('should return error when message is longer than 1000 char', async () => {
    const res = await request(app).post('/').send({
      name: "Kevin Brummer",
      email: "foo@bar.com",
      message: 'a'.repeat(1001)
    });
    
    expect(res.statusCode).toBe(400);
    expect(res.body['errors']['message']).toBe('Message must be 1000 characters or fewer');
  });

});