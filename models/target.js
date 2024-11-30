'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Target extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Target.hasMany(models.TargetGroup)
    }
  }
  Target.init({
    name: DataTypes.STRING,
    month: DataTypes.STRING,
    visible: DataTypes.INTEGER,
    label: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    targetgroupid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Target',
  });
  return Target;
};