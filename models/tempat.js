'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tempat = sequelize.define('Tempat', {
    nama_tempat: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  });
  Tempat.associate = function (models) {
    Tempat.belongsToMany(models.Barang, {
      through : 'TempatBarang'
    })
    Tempat.hasMany(models.TempatBarang)
  }
  return Tempat;
};