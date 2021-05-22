import request from 'supertest'
import { app } from '../../app'

it('return a 201 on successfull signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password'
    })
    .expect(201)
})

it('returns a 400 with invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test.com',
      password: 'password'
    })
    .expect(400)
})

it('returns a 400 with invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'p'
    })
    .expect(400)
})

it('returns a 400 with missing email or password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({email: 'test@test.com'})
    .expect(400)
  
  return request(app)
    .post('/api/users/signup')
    .send({password: 'password'})
    .expect(400)
})

it('doesnt allow duplicate emails', async () => {
  await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201)
  
  return request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(400)
})

it('sets a cookie after successful signup', async() => {
  const response = await request(app)
  .post('/api/users/signup')
  .send({
    email: 'test@test.com',
    password: 'password'
  })
  .expect(201)

  expect(response.get('Set-Cookie')).toBeDefined()
})