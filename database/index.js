'use strict';

const Users = require('./models/users');
const Challenge = require('./models//challenge');
const db = require('./database');

// Users.hasMany(Challenge);
// Challenge.belongsTo(Users);

Challenge.belongsTo(Users, { as: 'issuedFrom' });
Challenge.belongsTo(Users, { as: 'issuedTo' });
Users.belongsToMany(Users, { as: 'friends', through: 'friendship' });
// Challenge.belongsToMany(Users, {
//   through: 'challengeAccepted',
//   as: 'issuedTo',
// });

module.exports = {
  db,
  Challenge,
  Users,
};
