const express = require('express')
const app = express()
const port = 3000

app.use('/public',express.static('public'))
app.use('/assets',express.static('assets'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`api on port http://localhost:${port}`)
})