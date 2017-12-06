'use strict';
module.exports = (sequelize, DataTypes) => {
  var Barang = sequelize.define('Barang', {
    nama_barang: DataTypes.STRING,
    stock: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric : { msg : 'data yang di input bukan nomor'},
      }
    }
  });

  Barang.associate = function (models) {
    Barang.belongsToMany(models.Tempat, {
      through: 'TempatBarang'
    })
    Barang.belongsToMany(models.User, {
      through: 'RequestBarang'
    })
  }
  return Barang;
};
