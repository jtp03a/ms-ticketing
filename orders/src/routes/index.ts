import express, { Request, Response } from 'express'
import { NotFoundError } from '@jpetersondev/common_libs'
import { Order } from '../models/order'

const router = express.Router()

router.get('/api/orders', async (req: Request, res: Response) => {
  // const orders = await Order.find({})

  // if (!orders) {
  //   throw new NotFoundError()
  // }

  // res.send(orders)
  res.send('Test: get orders route')
})

export { router as getAllOrdersRouter }