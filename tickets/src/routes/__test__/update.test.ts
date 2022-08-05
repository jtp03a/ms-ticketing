import request from 'supertest'
import { app } from '../../app'
import mongoose from 'mongoose'


it('returns a 404 if provided id does not exist', async () => {
  const id = new mongoose.Types.ObjectId().toHexString()
  
  await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', global.signin())
    .send({
      title: 'Ticket',
      price: 20
    })
    .expect(404)
})

it('returns a 401 if user is not authenticated', async () => {
  const id = new mongoose.Types.ObjectId().toHexString()
  
  await request(app)
    .put(`/api/tickets/${id}`)
    .send({
      title: 'Ticket',
      price: 20
    })
    .expect(401)
})

it('returns a 401 if user does not own ticket', async () => {
  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'dfadf',
      price: 20
    })

  await request(app)
    .put(`/api/tickets/${response.body.id}`)
    .set('Cookie', global.signin())
    .send({
      title: 'fdasfd',
      price: 30
    })
    .expect(401)
  
})

it('returns a 400 if user provides an invalid title or price', async () => {
  const cookie = global.signin()
  
  const response = await request(app)
  .post('/api/tickets')
  .set('Cookie', cookie)
  .send({
    title: 'dfadf',
    price: 20
  })

  await request(app)
  .put(`/api/tickets/${response.body.id}`)
  .set('Cookie', cookie)
  .send({
    title: '',
    price: 'fdsgfdg'
  })
  .expect(400)

  await request(app)
  .put(`/api/tickets/${response.body.id}`)
  .set('Cookie', cookie)
  .send({
    title: 'fadfad',
    price: -10
  })
  .expect(400)

})

it('updates the ticket provided valid input', async () => {
  const cookie = global.signin()
  
  const response = await request(app)
  .post('/api/tickets')
  .set('Cookie', cookie)
  .send({
    title: 'dfadf',
    price: 20
  })

  await request(app)
  .put(`/api/tickets/${response.body.id}`)
  .set('Cookie', cookie)
  .send({
    title: 'dfadfa',
    price: 30
  })
  .expect(200)

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .send()

  expect(ticketResponse.body.title).toEqual('dfadfa')
  expect(ticketResponse.body.price).toEqual(30)
})