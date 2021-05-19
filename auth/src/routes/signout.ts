import express from 'express'

const router = express.Router()

router.get('/api/users/signout', (req, res) => {
  res.send('hit signout endpoint')
})

export { router as signoutRouter }