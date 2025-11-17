import winston from 'winston';
import 'winston-daily-rotate-file';
import path from 'path';

const logDir = path.join(process.cwd(), 'logs');
const dailyLogDir = path.join(logDir, 'daily');
const errorLogDir = path.join(logDir, 'error');

const customTimestampFormat = winston.format.timestamp({
  format: 'DD/MM/YYYY, HH:mm:ss',
});

const logFormat = winston.format.printf(({ timestamp, level, message, ...meta }) => {
  return JSON.stringify({
    timestamp,
    level,
    message,
    ...meta,
  });
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
  format: winston.format.combine(
    customTimestampFormat,
    winston.format.json(),
    logFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.DailyRotateFile({
      filename: path.join(dailyLogDir, '%DATE%-app.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '14d',
    }),
    new winston.transports.DailyRotateFile({
      level: 'error',
      filename: path.join(errorLogDir, '%DATE%-error.log'),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '14d',
    }),
  ],
});

export default logger;
