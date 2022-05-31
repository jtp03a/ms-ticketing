import request from 'supertest'
import { app } from '../../app'

it ('responds with 404 for an invalid route', async () => {
  await request(app)
    .get('/api/users/invalidroute')
    .send()
    .expect(404)
})