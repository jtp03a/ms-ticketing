import express from 'express'

const router = express.Router()

router.get('/api/users/signin', (req, res) => {
  res.send('hit signin endpoint')
})

export { router as signinRouter }