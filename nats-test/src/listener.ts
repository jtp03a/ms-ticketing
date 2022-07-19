import nats from 'node-nats-streaming'
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './Events/ticket-created-listener'
 
const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://nats-srv:4222'
})

client.on('connect', () => {
  console.log('Listener connected to NATS1');

  client.on('close', () => {
    console.log('NATS connection closed')
    process.exit()
  })

  new TicketCreatedListener(client).listen()
})

process.on('SIGINT', () => {
  client.close()
})

process.on('SIGTERM', () => {
  client.close()
})



