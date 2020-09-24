'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('./config');

const basename = path.basename(__filename);

const db = {};

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.images = require('./mediamdl.js')(sequelize, Sequelize);

module.exports = db;
