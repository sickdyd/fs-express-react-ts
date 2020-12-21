#!/usr/bin/env node

import app from './app'
import http from 'http'
import debug from 'debug'

debug('api:server')

const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function onError(error: any) {
  debug(error)
}

function onListening() {
  debug(`Listening on ${port}`)
}
