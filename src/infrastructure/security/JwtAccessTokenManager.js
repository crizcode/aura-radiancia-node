'use strict';

const jwt = require('jsonwebtoken');

const AccessTokenManager = require('../../application/security/AccessTokenManager');

const JWT_SECRET_KEY = '87db34f2ac2405035c8b206b867d8c968630abec';

module.exports = class extends AccessTokenManager {

  generate(payload) {
    return jwt.sign(payload, JWT_SECRET_KEY);
  }

  decode(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  }

};