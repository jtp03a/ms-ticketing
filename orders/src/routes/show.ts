import express, { Request, Response } from 'express'
// import { NotFoundError } from '@jpetersondev/common_libs'
// import { Ticket } from '../models/ticket'

const router = express.Router()

router.get('/api/orders/:id', async (req: Request, res: Response) => {
  // const ticket = await Ticket.findById(req.params.id)

  // if (!ticket) {
  //   throw new NotFoundError()
  // }

  // res.send(ticket)
  res.send('Test: get order by id route')
})

export { router as getOrderRouter }