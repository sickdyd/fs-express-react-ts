import { Router } from 'express'
const index = Router()

index.get('/', function (req, res) {
  res.status(200).send('homepage')
})

export default index
