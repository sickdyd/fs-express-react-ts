import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { morganLogging } from '@src/startup/logging'

import routes from '@src/startup/routes'

const app = express()

app.use(morgan('tiny', { stream: morganLogging }))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

routes(app)

export default app
