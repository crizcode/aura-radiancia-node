'use strict';

const bootstrap = require('./infrastructure/config/bootstrap');
const createServer = require('./infrastructure/webserver/server');

// Start the server
const start = async () => {

  try {
    await bootstrap.init();

    const server = await createServer();
    await server.start();

    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();