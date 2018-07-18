const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/challenges', require('./challenges'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

module.exports = router;
