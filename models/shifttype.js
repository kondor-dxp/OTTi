'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShiftType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShiftType.hasMany(models.Shift)
    }
  }
  ShiftType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShiftType',
  });
  return ShiftType;
};