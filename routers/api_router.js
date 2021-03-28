const router = require('express').Router();
const logger = require('../utils/logger');

router.use('/users', require('../api/user_controller'));
logger.info('* /users');

router.use('/*', (req, res) => {
  logger.debug('api route unable to find a route for the requested path: ' + req.originalUrl);
  res.status(404).send('Not Found');
});

module.exports = router;
