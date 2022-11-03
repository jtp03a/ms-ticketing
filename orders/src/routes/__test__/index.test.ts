import request from 'supertest'
import {app} from '../../app'
import mongoose from 'mongoose'
import { Order, OrderStatus } from '../../models/order'
import { Ticket } from '../../models/ticket'

const createTicket = async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20
  })

  await ticket.save()

  return ticket
}

it('returns all orders associated with a user', async () => {
  const ticket1 = await createTicket()
  const ticket2 = await createTicket()
  const ticket3 = await createTicket()

  const user1 = global.signin()
  const user2 = global.signin()

  const order1Response = await request(app)
  .post('/api/orders')
  .set('Cookie', user1)
  .send({ticketId: ticket1.id})
  .expect(201)

  const order2Response = await request(app)
  .post('/api/orders')
  .set('Cookie', user2)
  .send({ticketId: ticket2.id})
  .expect(201)

  const order3Response = await request(app)
  .post('/api/orders')
  .set('Cookie', user2)
  .send({ticketId: ticket3.id})
  .expect(201)

  const responseUser1 = await request(app)
    .get('/api/orders')
    .set('Cookie', user1)
    .send()
    .expect(200)

  const responseUser2 = await request(app)
    .get('/api/orders')
    .set('Cookie', user2)
    .send()
    .expect(200)

  expect(responseUser1.body.length).toEqual(1)
  expect(responseUser2.body.length).toEqual(2)
  expect(responseUser1.body[0].userId).toEqual(order1Response.body.userId)
  expect(responseUser2.body[0].userId).toEqual(order2Response.body.userId)
  expect(responseUser2.body[1].userId).toEqual(order3Response.body.userId)
})