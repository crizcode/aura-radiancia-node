'use strict';

module.exports = class {

  constructor(person_id, username, password, first_name, last_name, email, department_id, role_id, estado) {
    this.id = person_id;
    this.username = username;
    this.password = password;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.departmentId = department_id;
    this.roleId = role_id;
    this.estado = estado;
  }

};