import express from 'express'
import cors from 'cors'
import path from 'path'
import logger from 'morgan'

import routes from '@src/startup/routes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

routes(app)

export default app
