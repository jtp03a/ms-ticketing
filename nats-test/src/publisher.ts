import nats from 'node-nats-streaming'

//Testing the client connection
const client = nats.connect('ticketing', 'abc', {
  url: 'http://nats-srv:4222',
})

client.on('connect', () => {
  console.log('Publisher connected to NATS')
})

