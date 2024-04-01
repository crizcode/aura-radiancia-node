'use strict';

const sequelize = require('../database/sequelize/sequelize');
const User = require('../../domain/User');
const UserRepository = require('../../domain/UserRepository');


module.exports = class extends UserRepository {

  constructor() {
    super();
    this.db = sequelize;
    this.model = this.db.model('persona');
  }

  async persist(userEntity) {
    const { firstName, lastName, email, userName, password } = userEntity;
    const seqUser = await this.model.create({ firstName, lastName, userName, email, password });
    await seqUser.save();

    return new User(seqUser.id, seqUser.firstName, seqUser.lastName,  seqUser.userName, seqUser.email, seqUser.password);
  }

  async merge(userEntity) {
    const seqUser = await this.model.findByPk(userEnity.id);

    if (!seqUser) return false;

    const { firstName, lastName, email, userName, password } = userEntity;
    await seqUser.update({ firstName, lastName, userName, email, password });

    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.userName, seqUser.email, seqUser.password);
  }

  async remove(userId) {
    const seqUser = await this.model.findByPk(userId);
    if (seqUser) {
      return seqUser.destroy();
    }
    return false;
  }

  async get(userId) {
    const seqUser = await this.model.findByPk(userId);
    return new User(        
      seqUser.person_id,
      seqUser.username,
      seqUser.password,
      seqUser.first_name,
      seqUser.last_name,
      seqUser.email,
      seqUser.department_id,
      seqUser.role_id,
      seqUser.estado
      );
  }

  async getByUser(userName) {
    const seqUser = await this.model.findOne({ where: { user: userName } });
    return new User(seqUser.id, seqUser.firstName, seqUser.lastName, seqUser.userName, seqUser.email, seqUser.password);
  }

  async find() {
    const seqUsers = await this.model.findAll();
    return seqUsers.map((seqUser) => {
      return new User(
        seqUser.person_id,
        seqUser.username,
        seqUser.password,
        seqUser.first_name,
        seqUser.last_name,
        seqUser.email,
        seqUser.department_id,
        seqUser.role_id,
        seqUser.estado
      );
    });
  }

};