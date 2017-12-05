'use strict';
module.exports = (sequelize, DataTypes) => {
  var RequestBarang = sequelize.define('RequestBarang', {
    UserId: DataTypes.INTEGER,
    BarangId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    tgl_pinjam: DataTypes.DATE,
    approval: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return RequestBarang;
};