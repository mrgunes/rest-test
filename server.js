const path = require("path");
const express = require('express')
// var livereload = require('livereload');
// var server = livereload.createServer();

// server.watch(['/public','/assets']);


const app = express()
const port = 3000


app.use('/public',express.static('public'))
app.use('/assets',express.static('assets'))

app.get('', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join( __dirname,'/public', 'index.html'));

})

app.listen(port, () => {
  console.log(`api on port http://localhost:${port}`)
})