//=================================================================================
// File: winnston.js
// Summary: This file will maintain the configuration for our logging
//=================================================================================
// Info:
// winston logs information to files while morgan is used for console output.
// To effectively log - we need to capture a combo of both types of output.
//=================================================================================
const appRoot = require('app-root-path');
const winston = require('winston');
require('winston-daily-rotate-file');

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info', //level - Level of messages to log. 0:error, 1:warn, 2:info, 3:verbose, 4:debug, 5:silly
    handleExceptions: true, //handleExceptions - Catch and log unhandled exceptions.
    filename: `${appRoot.toString().match('[^/]+$')[0]}-%DATE%.log`, //filename - The file to be used to write log data to.
    dirname: `${appRoot}/logs`,
    dataPattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxsize: '5m',
    maxFiles: '7d', //Limit the number of files created when the size of the logfile is exceeded.
    json: false, //json - Records log data in JSON format.
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.splat(),
      winston.format.printf((info) => `[${info.timestamp}] [${info.level}]: [${info.message}]`)
    ),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.splat(),
      winston.format.printf((info) => `[${info.timestamp}] [${info.level}]: [${info.message}]`)
    ),
  },
};

// instantiate a new Winston Logger with the settings defined above
var logger = winston.createLogger({
  transports: [new winston.transports.DailyRotateFile(options.file), new winston.transports.Console(options.console)],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function (message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

module.exports = logger;
