import { Router } from 'express'
const users = Router()

users.get('/', (req, res) => {
  res.status(200).send('users list')
})

export default users
