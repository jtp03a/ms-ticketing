import request from 'supertest'
import {app} from '../../app'

import { Ticket } from '../../models/ticket'

const createTicket = async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20
  })

  await ticket.save()

  return ticket
}

it('returns a specific order', async () => {
  const ticket1 = await createTicket()

  const user1 = global.signin()

  const order1Response = await request(app)
  .post('/api/orders')
  .set('Cookie', user1)
  .send({ticketId: ticket1.id})
  .expect(201)

  const orderId = order1Response.body.id

  const responseUser1 = await request(app)
    .get(`/api/orders/${orderId}`)
    .set('Cookie', user1)
    .send()
    .expect(200)

  expect(responseUser1.body.id).toEqual(order1Response.body.id)
})