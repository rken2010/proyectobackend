import { createLogger, transports as _transports } from 'winston';

function buildProdLogger() {
  const prodLogger = createLogger({
    transports: [
      new _transports.File({ filename: 'warn.log', level: 'warning' }),
      new _transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });
  return prodLogger;
}

function buildDevLogger() {
  const devLogger = createLogger({
    transports: [
      new _transports.Console({ level: 'info' }),
      new _transports.File({ filename: 'warn.log', level: 'warn' }),
      new _transports.File({ filename: 'error.log', level: 'error' }),
    ],
  });
  return devLogger;
}

export let logger = null;

if (process.env.NODE_ENV === 'production') {
  logger = buildProdLogger();
} else {
  logger = buildDevLogger();
}

export default logger;