const express   = require('express')
const Model     = require('../models')
const Sequelize = require('sequelize')
const Router    = express.Router()
const title     = 'Data Pemesanan Barang'

Router.get('/', (req, res) => {
  Model.RequestBarang.findAll({where: {
    UserId: res.locals.userSession.id
  }})
  .then(pemesanan => {
    // console.log(pemesanan[0].Barangs);
    res.render('./pemesanan', {
      title     : title,
      sidebar   : 'pemesanan',
      pemesanan : pemesanan,
    })
  })
})

Router.get('/add', (req, res) => {
  Model.Barang.findAll()
  .then((barang) => {
    res.render('./pemesanan_add', {
      title       : title,
      sidebar     : 'pemesanan',
      pemesanan   : false,
      barang     : barang,
      errMessage  : null,
    })
  })
})

Router.post('/add', (req, res) => {
  let objPemesanan = {
    UserId      : userSession.id,
    BarangId    : req.body.barang,
    quantity    : req.body,quantity,
    tgl_pinjam  : req.body.tgl_pinjam,
    createdAt   : new Date(),
    updatedAt   : new Date(),
  }
  Model.Pemesanan.create(objPemesanan)
  .then(() => {
    res.redirect('/pemesanan')
  })
  .catch(err => {
    res.render('./pemesanan_add', {
      title       : title,
      sidebar     : 'pemesanan',
      pemesanan   : false,
      errMessage  : err.message,
    })
  })
})

Router.get('/edit/:id', (req, res) => {
  Model.Pemesanan.findById(req.params.id)
  .then(pemesanan => {
    Model.Barang.findAll()
    .then((barang) => {
      res.render('./pemesanan_add', {
        title       : title,
        sidebar     : 'pemesanan',
        pemesanan   : pemesanan,
        barang      : barang,
        errMessage  : null,
      })
    })
  })
})

Router.post('/edit/:id', (req, res) => {
  let objPemesanan = {
    id          : req.params.id,
    UserId      : userSession.id,
    BarangId    : req.body.barang,
    quantity    : req.body,quantity,
    tgl_pinjam  : req.body.tgl_pinjam,
    updatedAt   : new Date(),
  }
  Model.Pemesanan.update(objPemesanan, {
    where: {
      id: req.params.id,
    }
  })
  .then(() => {
    res.redirect('/pemesanan')
  })
  .catch(err => {
    Model.Pemesanan.findById(req.params.id)
    .then(pemesanan => {
      res.render('./tempat_add', {
        title       : title,
        sidebar     : 'pemesanan',
        pemesanan   : pemesanan,
        errMessage  : err.message,
      })
    })
  })
})

Router.get('/delete/:id', (req, res) => {
  Model.Pemesanan.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/pemesanan')
  })
})

module.exports = Router;
