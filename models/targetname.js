'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TargetName extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TargetName.belongsTo(models.TargetGroup)
    }
  }
  TargetName.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TargetName',
  });
  return TargetName;
};