'use strict';
module.exports = (sequelize, DataTypes) => {
  var SewaBarang = sequelize.define('SewaBarang', {
    RequestBarangId: DataTypes.INTEGER,
    tgl_kembali: DataTypes.DATE,
    status_pinjam: DataTypes.INTEGER,
    status_barang: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SewaBarang;
};