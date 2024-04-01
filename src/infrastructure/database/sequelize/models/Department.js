// Person.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Deparment = sequelize.define('deparment', {
      department_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      department_name: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
      }
    });
  
    // Definir cualquier relación si es necesario
  
    return Deparment;
  };
  