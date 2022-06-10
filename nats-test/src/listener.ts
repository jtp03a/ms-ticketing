import nats, { Message }  from 'node-nats-streaming'
import { randomBytes } from 'crypto';

const client = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://nats-srv:4222'
})

client.on('connect', () => {
  console.log('Listener connected to NATS');

  client.on('close', () => {
    console.log('NATS connection closed')
    process.exit()
  })

  const options = client.subscriptionOptions()
    .setManualAckMode(true)

  const subscription = client.subscribe('ticket:created', 'orders-service-queue-group', options)

  subscription.on('message', (msg: Message) => {
    console.log(msg.getSequence());
    const data = msg.getData();

    if(typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`)
    }

    msg.ack()
  })
})

process.on('SIGINT', () => {
  client.close()
})

process.on('SIGTERM', () => {
  client.close()
})