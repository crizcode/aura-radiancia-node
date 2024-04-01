// Person.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Roles = sequelize.define('roles', {
      role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      role_name: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
      }
    });
  
    // Definir cualquier relación si es necesario
  
    return Roles;
  };
  