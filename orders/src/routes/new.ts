import mongoose from 'mongoose'
import express, { Request, Response } from 'express'
import { BadRequestError, NotFoundError, OrderStatus, requireAuth, validateRequest } from '@jpetersondev/common_libs'
import { body } from 'express-validator'
import { Ticket } from '../models/ticket'
import { Order } from '../models/order'
// import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher'
// import { natsWrapper } from '../nats-wrapper'

const router = express.Router()

router.post('/api/orders', requireAuth, [
  body('ticket')
    .not()
    .isEmpty()
    .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
    .withMessage('TicketId must be provided')
], validateRequest, async (req: Request, res: Response) => {
  const { ticketId } = req.body
  // find the ticket the user is trying to order in the database
  const ticket = await Ticket.findById(ticketId)

  if (!ticket) {
    throw new NotFoundError()
  }

  // make sure the ticket is not already reserved
  const isReserved = await ticket.isReserved()

  if (isReserved) {
    throw new BadRequestError('Ticket is already reserved')
  }

  // calculate an expiration time for the order, how long it is held to be paid for

  // build the order and save it to the database

  // publish an event saying that an order was created


  res.send('Test: new order route')
})

export { router as newOrderRouter }