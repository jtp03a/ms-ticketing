import request from 'supertest'
import {app} from '../../app'
import mongoose from 'mongoose'
import { Order, OrderStatus } from '../../models/order'
import { Ticket } from '../../models/ticket'

it('returns an error if ticket does not exist', async () => {
  const ticketId = new mongoose.Types.ObjectId()

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.signin())
    .send({ ticketId: ticketId })
    .expect(404)
})

it('returns an error if the ticket already reserved', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20
  })

  await ticket.save()

  const order = Order.build({
    ticket,
    userId: 'jtp03a',
    status: OrderStatus.Created,
    expiresAt: new Date()
  })

  await order.save()

  await request(app)
    .post('/api/orders')
    .set('Cookie', global.signin())
    .send({ticketId: ticket.id})
    .expect(400)
})

it('reserves a ticket as expected', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20
  })

  await ticket.save()

  await request(app)
  .post('/api/orders')
  .set('Cookie', global.signin())
  .send({ticketId: ticket.id})
  .expect(201)
})

it.todo('emits an order created event')