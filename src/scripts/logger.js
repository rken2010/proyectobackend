import { createLogger, transports as _transports, format } from 'winston';
import util from "util"

class Logger {
  constructor() { 
    this.winstonLogger = createLogger({
      levels      : { error: 1, warn: 2, info: 3 },
      transports  : this._createTransports(),
      exitOnError : false,
    }) }

  info(message, data) { this.winstonLogger.info({ message, data }) }
  warn(message, data) { this.winstonLogger.warn({ message, data }) }
  error(message, data) { this.winstonLogger.error({ message, data }) }

  _createTransports() {
    const TRANSPORTS = []
    TRANSPORTS.push(new _transports.Console({
      format           : format.printf(this._consoleFormat()),
      level            : 'info', 
      handleExceptions : false,
      colorize         : true,
      json             : false,
    }))
    Array.from(['info', 'warn', 'error']).forEach(level => {
      TRANSPORTS.push(new _transports.File({
        format           : format.printf(this._fileFormat()),
        level            : level,
        handleExceptions : false,
        colorize         : true,
        json             : true,
        filename         : `logs/${level}.log`,
        maxsize          : 5242880, 
        maxFiles         : 5,
      }))
    })
    return TRANSPORTS
  }
  _consoleFormat () {
    const COLORS = {
      error : `\x1b[91m`, 
      warn  : `\x1b[93m`, 
      info  : `\x1b[96m`, 
      reset : `\x1b[0m`,  
    }
    return (info) => {
      const START     = COLORS[info.level]
      const END       = COLORS.reset
      const TIMESTAMP = Date().toLocaleString()
      const LEVEL     = info.level
      const MESSAGE   = info.message
      const DATA      = info.data ? util.inspect(info.data, false, null) : ''
      return `${START} ${TIMESTAMP} [${LEVEL}] ${MESSAGE} ${DATA} ${END}`
    }
  }
  _fileFormat() {
    return (info)  => {
      const TIMESTAMP = Date().toLocaleString()
      const LEVEL     = info.level
      const MESSAGE   = info.message
      const DATA      = info.data ? util.inspect(info.data, false, null) : null
      return JSON.stringify({
        timestamp : TIMESTAMP,
        level     : LEVEL,
        message   : MESSAGE,
        data      : DATA,
      })
    }
  }
}

export const logger = new Logger()


export default logger;