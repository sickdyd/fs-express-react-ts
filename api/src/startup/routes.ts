import indexRouter from '@src/routes/index'
import usersRouter from '@src/routes/users'

export default function routes(app: any) {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
}
