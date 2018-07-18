'use strict';

const { Users } = require('../../database/');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
