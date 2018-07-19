'use strict';

const { STRING, BOOLEAN, INTEGER, TEXT } = require('sequelize');
const db = require('../database');

module.exports = db.define('challenge', {
  challengeText: {
    type: STRING,
  },
  challengePicture: {
    type: TEXT,
  },
  accepted: {
    type: BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: INTEGER,
  },
});
