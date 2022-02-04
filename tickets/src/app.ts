import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import cors from 'cors'
import { errorHandler, NotFoundError } from '@jtp03a/common_libs'


const app = express()
app.use((req, res, next) => { next(); }, cors({maxAge: 84600}));
app.set('trust proxy', true)
app.use(json())
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== 'test'
}))

app.all('*', async (req, res) => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }