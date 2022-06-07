import nats from 'node-nats-streaming'

const client = nats.connect('ticketing', '123', {
  url: 'http://nats-srv:4222'
})

client.on('connect', () => {
  console.log('Listener connected to NATS');

  const subscription = client.subscribe('ticket:created')

  subscription.on('message', (msg) => {
    console.log('Message recieved');
  })
})