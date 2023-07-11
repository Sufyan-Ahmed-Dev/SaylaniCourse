const express = require('express');
const app = express()
const port = 3000

app.get('/', (_req, _res) => {
  _res.send('This is Home Section')
})

app.get('/about', (_req, _res) => {
    _res.send('This is about Section')
  })

  
app.get('/contact', (_req, _res) => {
    _res.send('This is contact section')
  })

app.get('/login', (_req, _res) => {
    _res.send('This is login section')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})