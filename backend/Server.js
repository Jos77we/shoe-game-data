const express = require('express')
const dotenv = require('dotenv').config()
const connectDb = require('./config/database')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000

connectDb()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', require('./routes/ImagePosterRoute'))
app.use('/api/user', require('./routes/UserRoute'))

app.listen(port, () => console.log(`server started on port ${port}`))