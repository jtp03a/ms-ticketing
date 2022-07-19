import nats from 'node-nats-streaming'
import { TicketCreatedPublisher } from './Events/ticket-created-publisher'

//Testing the client connection
const client = nats.connect('ticketing', 'abc', {
  url: 'http://nats-srv:4222',
})

client.on('connect', () => {
  console.log('Publisher connected to NATS')

  const data = {
    id: '123',
    title: 'concert',
    price: 20
  }

  new TicketCreatedPublisher(client).publish(data)
})

