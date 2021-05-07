const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index', { showdata })
})

app.all('*', (request, response) => {
  return response.sendstatus(404)
})

app.listen(1296, () => {
  console.log('listening on 1296...')
})
