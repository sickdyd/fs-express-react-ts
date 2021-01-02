#!/usr/bin/env node

import app from './app'
import http from 'http'
import config from 'config'
import logger from '@src/startup/logging'
import socketIoServer from '@src/startup/socketIoServer'

const port = config.get('port')
app.set('port', port)

const server = http.createServer(app)
socketIoServer(server)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error: Error) {
  logger.error(error.message)
}

function onListening() {
  logger.info(`Listening to port ${port}...`)
}
