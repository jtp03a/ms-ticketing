import express from 'express'
import { currentUser } from '@jtp03a/common_libs'

const router = express.Router()

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({currentUser: req.currentUser || null })
})

export { router as currentUserRouter }