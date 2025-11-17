import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production' ? 'warn' : 'info',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: process.env.NODE_ENV === 'production' ? '/var/log/nextjs/app.log' : 'logs/app.log' }),
    new winston.transports.Console(),
  ],
});

export default logger;
