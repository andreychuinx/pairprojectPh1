'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tempat = sequelize.define('Tempat', {
    nama_tempat: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tempat;
};