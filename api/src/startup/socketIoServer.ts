import { Server, Socket } from 'socket.io'
import { Server as httpServer } from 'http'
import logger from './logging'

export default function socketIoServer(server: httpServer): void {
  const io = new Server(server, {
    cors: {
      origin: '*'
    }
  })

  io.on('connection', (socket: Socket) => {
    logger.info(`Creating socket with id: ${socket.id}`)

    socket.emit('greeting', 'Message sent from server to client')

    socket.on('greeting', (data: string) => {
      logger.info(`Client says: ${data}`)
    })
  })
}
