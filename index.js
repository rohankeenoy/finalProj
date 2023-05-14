const express = require('express')
const app = express()
const { corsOptionsRequests, corsSimpleRequests } = require('./middleware/cors')
const bodyParser = require('body-parser')
const removePoweredBy = require('./middleware/removePoweredBy')
require('dotenv').config()
// end points
const createUser = require('./services/createUser')



console.log(process.env.CONNECTION)

app.options('*', corsOptionsRequests)
app.use(corsSimpleRequests)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(removePoweredBy)


//post,get,delete
app.post('/create', createUser)

module.exports = app