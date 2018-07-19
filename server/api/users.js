'use strict';

const { Users } = require('../../database/');
const router = require('express').Router();

router.get('/:id', async function(req, res, next) {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.id,
      },
      // include: {
      //   model: Chall,
      // },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();
    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
