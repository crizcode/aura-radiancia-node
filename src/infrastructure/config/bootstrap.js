'use strict';

require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {

  async init() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.SQL_SERVER || environment.database.dialect === constants.SUPPORTED_DATABASE.MYSQL) {

      require('../database/sequelize/sequelize');
    }
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
      const sequelize = require('../database/mongoose/mongoose');
      try {
        await sequelize.sync();
        console.log('Connection to DB has been established successfully.');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  }
};