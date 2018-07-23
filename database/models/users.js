'use strict';

const { STRING, ARRAY, INTEGER, TEXT, BOOLEAN, VIRTUAL } = require('sequelize');
const db = require('../database');

module.exports = db.define('users', {
  firstName: {
    type: STRING,
  },
  lastName: {
    type: STRING,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  picture: {
    type: TEXT,
  },
});
