const ejs          = require('ejs')
const express      = require('express')
const bodyParser   = require('body-parser')
const index        = require('./routes/index')
const userRoutes   = require('./routes/user')
// const barangRoutes = require('./routes/barang')
const tempatRoutes = require('./routes/tempat')
// const tempatBarangRoutes = require('./routes/tempatbarang')
const app          = express()

app.set('view engine', 'ejs')
app.set('view cache', false)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(process.cwd() + '/public'))

app.use('/', index)
app.use('/user', userRoutes)
// app.use('/barang', barangRoutes)
app.use('/tempat', tempatRoutes)
// app.use('/tempatbarang', tempatBarangRoutes)


app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))
