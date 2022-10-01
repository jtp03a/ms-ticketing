import express, { Request, Response } from 'express'
// import { requireAuth, validateRequest, NotFoundError, NotAuthorizedError } from '@jpetersondev/common_libs'
// import { body } from 'express-validator'
// import { Ticket } from '../models/ticket'
// import { TicketUpdatedPublisher } from '../events/publishers/ticket-updated-publisher'
// import { natsWrapper } from '../nats-wrapper'

const router = express.Router()

router.delete('/api/orders/:orderId', async (req: Request, res: Response) => {
  // const { title, price } = req.body

  // const ticket = await Ticket.findById(req.params.id)
  
  // if(!ticket) {
  //   throw new NotFoundError()
  // }

  // if(ticket.userId !== req.currentUser!.id) {
  //   throw new NotAuthorizedError()
  // }

  // ticket.set({
  //   title: req.body.title,
  //   price: req.body.price
  // })

  // await ticket.save()

  // new TicketUpdatedPublisher(natsWrapper.client).publish({
  //   id: ticket.id,
  //   title: ticket.title,
  //   price: ticket.price,
  //   userId: ticket.userId
  // })

  // res.send(ticket)
  res.send('Test: delete orders route')
})

export { router as delOrderRouter }