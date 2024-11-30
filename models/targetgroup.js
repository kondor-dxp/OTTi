'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TargetGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TargetGroup.belongsTo(models.Target)
      TargetGroup.hasMany(models.TargetName)
    }
  }
  TargetGroup.init({
    targetnameid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TargetGroup',
  });
  return TargetGroup;
};