'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const PersonSerializer = require('../../interfaces/serializers/PersonSerializer');

function buildBeans() {

  const beans = {
    accessTokenManager: new JwtAccessTokenManager(),
    personSerializer: new PersonSerializer(),
  };

  if (environment.database.dialect === constants.SUPPORTED_DATABASE.SQL_SERVER) {
    const PersonRepositorySQL = require('../repositories/PersonRepositorySQL');
    beans.userRepository = new PersonRepositorySQL();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    const UserRepositoryMongo = require('../repositories/UserRepositoryMongo');
    beans.userRepository = new UserRepositoryMongo();
  } else if (environment.database.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    throw new Error('Add PostgreSQL support');
  } else {
    const UserRepositorySQLite= require('../repositories/UserRepositorySQLite');
    beans.userRepository = new UserRepositorySQLite();
  }

  return beans;
}

module.exports = buildBeans();