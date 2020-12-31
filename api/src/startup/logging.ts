import winston from 'winston'

process.on('unhandledRejection', (error) => {
  throw error
})

const logSettings = {
  maxsize: 5000000,
  maxFiles: 5
}

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((i) => `${i.timestamp} | ${i.message} ${i.stack ? '\n' + i.stack : ''}`)
  ),
  level: 'info',
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
      ...logSettings
    }),
    new winston.transports.File({
      filename: './logs/combined.log',
      ...logSettings
    })
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: './logs/exceptions.log',
      ...logSettings
    }),
    new winston.transports.File({
      filename: './logs/combined.log',
      ...logSettings
    })
  ],
  handleExceptions: true
})

const consoleFormat = winston.format.printf(function (info) {
  return `${info.timestamp} - ${info.level}: ${JSON.stringify(info.message, null, 4)}`
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        consoleFormat
      ),
      level: 'info',
      handleExceptions: true
    })
  )
}

export const morganLogging = {
  write: (text: string): void => {
    logger.info(text.replace(/\n$/, ''))
  }
}

logger.exitOnError = false

export default logger
