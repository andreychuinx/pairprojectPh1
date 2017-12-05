const express   = require('express')
const Model     = require('../models')
const Sequelize = require('sequelize')
const Router    = express.Router()

Router.get('/', (req, res) => {
  Model.User.findAll()
  .then(users => {
    res.render('./user', {
      title   : 'Data User',
      sidebar : 'users',
      user    : users,
    })
  })
})

Router.get('/add', (req, res) => {
  res.render('./user_add', {
    title       : 'Data User',
    sidebar     : 'users',
    user        : false,
    errMessage  : null,
  })
})

Router.post('/add', (req, res) => {
  let objUser = {
    email     : req.body.email,
    password  : req.body.password,
    role      : req.body.role,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
  Model.User.create(objUser)
  .then(() => {
    res.redirect('/user')
  })
  .catch(err => {
    res.render('./user_add', {
      title       : 'Data User',
      sidebar     : 'users',
      user        : false,
      errMessage  : err.message,
    })
  })
})

Router.get('/edit/:id', (req, res) => {
  Model.User.findById(req.params.id)
  .then(user => {
    res.render('./user_add', {
      title       : 'Data User',
      sidebar     : 'users',
      user        : user,
      errMessage  : null,
    })
  })
})

Router.post('/edit/:id', (req, res) => {
  let objUser = {
    id        : req.params.id,
    email     : req.body.email,
    password  : req.body.password,
    role      : req.body.role,
    updatedAt : new Date(),
  }
  Model.User.update(objUser, {
    where: {
      id: req.params.id,
    }
  })
  .then(() => {
    res.redirect('/user')
  })
  .catch(err => {
    Model.User.findById(req.params.id)
    .then(user => {
      res.render('./user_add', {
        title       : 'Data User',
        sidebar     : 'users',
        user        : user,
        errMessage  : err.message,
      })
    })
  })
})

Router.get('/delete/:id', (req, res) => {
  Model.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/user')
  })
})

module.exports = Router;
