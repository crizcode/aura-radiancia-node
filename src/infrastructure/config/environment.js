const constants = require('./constants');

/**
 * Este módulo centraliza todas las variables de entorno de la aplicación. NO DEBE haber ninguna
 * instrucción `process.env` en ningún otro archivo o módulo.
 */
module.exports = (() => {

  const environment = {
    database: {
      dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.SQL_SERVER,
      url: process.env.DATABASE_URI || '',
    }
  };

  if (process.env.NODE_ENV === 'test') {
    environment.database = {
      driver: constants.SUPPORTED_DATABASE.IN_MEMORY
    }
  }

  return environment;
})();
