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

router.get('/accepted/:id', async (req, res, next) => {
  const issuerToId = req.params.id;
  try {
    const allChallenges = await Challenge.findAll({
      include: [{ model: Users, as: 'issuedFrom' }],
      where: {
        issuedToId: issuerToId,
        accepted: true,
      },
    });
    res.json(allChallenges);
  } catch (err) {
    next(err);
  }
});

// filter by loggedInUser
router.get('/issuedTo/:id', async (req, res, next) => {
  const issuerToId = req.params.id;
  try {
    const allChallenges = await Challenge.findAll({
      include: [{ model: Users, as: 'issuedFrom' }],
      where: {
        issuedToId: issuerToId,
        accepted: false,
      },
    });
    res.json(allChallenges);
  } catch (err) {
    next(err);
  }
});

router.get('/issuedFrom/:id', async (req, res, next) => {
  const issuerId = req.params.id;
  try {
    const allChallenges = await Challenge.findAll({
      include: [{ model: Users, as: 'issuedFrom' }],
      where: {
        // accepted: true,
        issuedFromId: issuerId,
      },
    });
    res.json(allChallenges);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const destroyedChallenge = await Challenge.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const acceptedChallenge = await Challenge.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log(req.body);
    acceptedChallenge.update(req.body);
    res.json(acceptedChallenge);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
