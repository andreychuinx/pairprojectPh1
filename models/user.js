'use strict';
const Op = require('sequelize').Op

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          User.findAll({
            where:{
              email: value,
              id: { [Op.ne]: this.id, }
            }
          })
          .then(function(user) {
            if (user.length == 0) {
              next()
            } else {
              next('Email sudah terdaftar !')
            }
          })
          .catch(function(err) {
            next(err)
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password harus di isi !!'
        },
        len: {
          args: [6, 255],
          msg: 'Password minimal 6 karakter !!'
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        customValidation: function(value, next) {
          if (value == 0) {
            next('Silahkan pilih role !!')
          } else {
            next()
          }
        }
      }
    },
    last_login: DataTypes.DATE
  });
  return User;
};
