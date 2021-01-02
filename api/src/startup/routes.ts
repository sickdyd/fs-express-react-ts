import { Express } from 'express'
import indexRouter from '@src/routes/index'
import usersRouter from '@src/routes/users'

export default function routes(app: Express): void {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
}
