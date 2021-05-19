import express from 'express'

const router = express.Router()

router.post('/api/users/signout', (req, res) => {
  res.send('hit signout endpoint')
})

export { router as signoutRouter }