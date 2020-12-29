#!/usr/bin/env node

import app from './app'
import http from 'http'
import debug from 'debug'
import config from 'config'

debug('api:server')

const port = config.get('port')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error: Error) {
  debug(error.message)
}

function onListening() {
  debug(`Listening on ${port}`)
}
