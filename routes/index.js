const express = require('express')
, Router = express.Router()
, Model = require('../models')

Router.get('/', (req, res) => {
let totalTeacher = 0
, totalSubject = 0
, totalStudent = 0
  res.render('index', {
    title         : 'Inventory App',
    sidebar       : 'dashboard',
    // template      : '../../views/pages/dashboard',

  })
})

module.exports = Router;