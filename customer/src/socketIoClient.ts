import { io, Socket } from 'socket.io-client'

export default async function socketIo(): Promise<Socket> {
  return io('http://localhost:3030', { transports: ['websocket'] }).connect()
}
