import indexRouter from '../routes/index'
import usersRouter from '../routes/users'

export default function routes(app: any) {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
}
