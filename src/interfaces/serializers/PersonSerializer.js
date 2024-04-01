'use strict';

const _serializeSinglePerson = (person) => {
  return {
    'person_id': person.id,
    'username': person.username,
    'password': person.password,
    'first_name': person.firstName,
    'last_name': person.lastName,
    'email': person.email,
    'department_id': person.departmentId,
    'role_id': person.roleId,
    'estado': person.estado,
  };
};

module.exports = class {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleUser);
    }
    return _serializeSinglePerson(data);
  }

};