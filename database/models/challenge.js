'use strict';

const { STRING, BOOLEAN, INTEGER, TEXT } = require('sequelize');
const db = require('../database');

module.exports = db.define('challenge', {
  challengeText: {
    type: STRING,
    allowNull: false,
  },
  challengePicture: {
    type: TEXT,
    allowNull: false,
  },
  accepted: {
    type: BOOLEAN,
    defaultValue: false,
  },
  rating: {
    type: INTEGER,
  },
  responsePicture: {
    type: TEXT,
  },
  responseText: {
    type: STRING,
  },
});
