import { Router } from 'express'
const users = Router()

users.get('/', function (req, res) {
  res.send('respond with a resource')
})

export default users
