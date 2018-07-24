const router = require('express').Router();
const { Challenge, Users } = require('../../database/');
module.exports = router;

// router.put('/login', (req, res, next) => {
//   Users.findOne({
//     where: {
//       email: req.body.email,
//       password: req.body.password,
//     },
//   })
//     .then(user => {
//       if (user) {
//         req.session.userId = user.id;
//         res.json(user);
//       } else {
//         const err = new Error('Incorrect email or password!');
//         err.status = 401;
//         next(err);
//       }
//     })
//     .catch(next);
// });

// auth routes go below!
router.put('/login', async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      const err = new Error('Incorrect email or password!');
      res.send(err).status(401);
    }
  } catch (err) {
    next(err);
  }
});

// router.get('/login', async (req, res, next) => {
//   try {
//     res.sendStatus(200);
//   } catch (error) {
//     res.sendStatus(404);
//   }
// });
