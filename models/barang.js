'use strict';
module.exports = (sequelize, DataTypes) => {
  var Barang = sequelize.define('Barang', {
    nama_barang: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Barang;
};