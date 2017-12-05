const express = require('express')
, Router = express.Router()
, Model = require('../models')

Router.get('/', (req, res) => {
  let totalUser = 0
      , totalTempat = 0

  Model.User.count()
  .then(countUser => {
    totalUser = countUser
  })
  Model.Tempat.count()
  .then(countTempat => {
    totalTempat = countTempat
  })

  res.render('index', {
    title         : 'Inventory App',
    sidebar       : 'dashboard',
    totalUser     : totalUser,
    totalTempat   : totalTempat,
  })
})

module.exports = Router;
