import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import cors from 'cors'
import { errorHandler, NotFoundError, currentUser } from '@jpetersondev/common_libs'
import { newOrderRouter } from './routes/new'
import { getOrderRouter } from './routes/show'
import { getAllOrdersRouter } from './routes/index'
import { delOrderRouter } from './routes/delete'


const app = express()
app.use((req, res, next) => { next(); }, cors({maxAge: 84600}));
app.set('trust proxy', true)
app.use(json())
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}))
app.use(currentUser)

app.use(newOrderRouter)
app.use(getOrderRouter)
app.use(getAllOrdersRouter)
app.use(delOrderRouter)

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }