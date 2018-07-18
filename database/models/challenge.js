'use strict';

const { STRING } = require('sequelize');
const db = require('../database');

module.exports = db.define('challenge', {
  challengeText: {
    type: STRING,
  },
  picture: {
    type: STRING,
  },
});
