'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tempat = sequelize.define('Tempat', {
    nama_tempat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Nama tempat harus di isi !!'
        }
      }
    },
    deskripsi: DataTypes.STRING
  });
  return Tempat;
};
