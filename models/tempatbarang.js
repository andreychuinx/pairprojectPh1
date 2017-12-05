'use strict';
module.exports = (sequelize, DataTypes) => {
  var TempatBarang = sequelize.define('TempatBarang', {
    BarangId: DataTypes.INTEGER,
    TempatId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TempatBarang;
};