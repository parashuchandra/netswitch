const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const userService = require('../services/user.service');

router.get(
  '/getbyid/:id',
  asyncHandler(async (req, res, next) => {
    const result = await userService.findById(req.params.id);
    res.status(200).send(result);
  })
);

router.get(
  '/getbynumber/:phno',
  asyncHandler(async (req, res, next) => {
    const result = await userService.findByNumber(req.params.phno);
    res.status(200).send(result);
  })
);

module.exports = router;
