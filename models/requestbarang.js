'use strict';
module.exports = (sequelize, DataTypes) => {
  var RequestBarang = sequelize.define('RequestBarang', {
    UserId: DataTypes.INTEGER,
    BarangId: DataTypes.INTEGER,
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric : {
          msg : 'Data yang di input bukan angka (0-9) !!'
        },
        customValidation: function(value, next) {
          if (value == '') {
            next('Silahkan masukkan jumlah barang !!')
          } else {
            next()
          }
        },
      }
    },
    tgl_pinjam: DataTypes.DATE,
    approval: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  });

  return RequestBarang;
};
