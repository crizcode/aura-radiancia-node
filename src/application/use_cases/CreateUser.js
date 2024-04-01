'use strict';

const User = require('../../domain/User')

module.exports = (firstName, lastName, email, userName,password, { userRepository }) => {
  const user = new User(null, firstName, lastName, email, userName, password);
  return userRepository.persist(user);
};