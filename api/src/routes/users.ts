import { Router } from 'express'
const users = Router()

users.get('/', function (req, res) {
  res.send('users list')
})

export default users
