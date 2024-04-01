'use strict';

const PersonController = require('../controllers/PersonController');

module.exports = {
  name: 'people',
  version: '1.0.0',
  register: async (server) => {

    server.route([
      {
        method: 'GET',
        path: '/people',
        handler: PersonController.findUsers,
        options: {
          description: 'List all people',
          tags: ['api'],
        },
      },
      {
        method: 'POST',
        path: '/people',
        handler: PersonController.createUser,
        options: {
          description: 'Create a user',
          tags: ['api'],
        },
      },
      {
        method: 'GET',
        path: '/people/{id}',
        handler: PersonController.getUser,
        options: {
          description: 'Get a user by its {id}',
          tags: ['api'],
        },
      },
      {
        method: 'DELETE',
        path: '/people/{id}',
        handler: PersonController.deleteUser,
        options: {
          description: 'Delete a user',
          tags: ['api'],
        },
      },
    ]);
  }
};