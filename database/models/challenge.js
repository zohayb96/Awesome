'use strict';

const { STRING, BOOLEAN, INTEGER } = require('sequelize');
const db = require('../database');

module.exports = db.define('challenge', {
  challengeText: {
    type: STRING,
  },
  challengePicture: {
    type: STRING,
  },
  accepted: {
    type: BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: INTEGER,
  },
});
