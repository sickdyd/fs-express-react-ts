import { Router } from 'express'
const index = Router()

index.get('/', (req, res) => {
  res.status(200).send('homepage')
})

export default index
