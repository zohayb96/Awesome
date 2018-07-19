'use strict';
const { Challenge, Users } = require('../../database/');
const router = require('express').Router();

router.post('/', async (req, res, next) => {
  try {
    console.log(req.body);
    const createdChallenge = await Challenge.create(req.body);
    if (createdChallenge) {
      res.status(201).json(createdChallenge);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

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
