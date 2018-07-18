'use strict';
const { Challenge, Users } = require('../../database/');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
  try {
    const allChallenges = await Challenge.findAll({
      include: [{ model: Users, as: 'issuedFrom' }],
    });
    res.json(allChallenges);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
