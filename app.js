'use strict';
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const session = require('express-session');
const csurf = require('csurf');
const config = require('./config');
const logger = require('./utils/logger');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const isProduction = config.env_name === 'production';

const app = express();
app.use(compression());

app.use(helmet());

app.use(morgan('combined', { stream: logger.stream }));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({ name: config.ses_cookie_name, secret: config.session_secret, resave: false, saveUninitialized: false })
);

const csurfProtection = csurf({ cookie: true });
app.use(csurfProtection, (req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false, path: '/' });
  next();
});

const apiRoutes = require('./routers/api_router');
app.use(`${config.app_uri}/api`, apiRoutes);

// app.use((error, req, res, next) => {
//   console.error(error.message || error);
//   res.status(500).send({ message: error.message || error });
// });

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(err.status || 500).send({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

app.use(express.static(__dirname + '/dist', { fallthrough: true }));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

const port = process.env.PORT || 3000;
// finally, let's start our server...
const server = app.listen(port, function () {
  logger.info('Listening on port ' + server.address().port);
});
