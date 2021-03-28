
const path = require("path");
const showdown = require('showdown');
const mongoose = require('mongoose');
const passport = require("passport");

const express = require("express");

require('./auth');
const UserModel = require('./model');
const routes = require('./routes');
const sec_route = require('./sec_route');

mongoose.connect("mongodb://127.0.0.1:27017/passport-jwt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error));
mongoose.Promise = global.Promise;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('assets'))

converter = new showdown.Converter()


app.get('', (req, res) => {
  res.sendFile(path.join('public', 'README.html'));
});

app.use('/', routes)

// /user/profile
app.use('/u', passport.authenticate('jwt', { session: false }), sec_route);

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.toString() });
});

app.post('/login', function (req, res) {
  res.send('Authenticated');
});

app.post('/convertmd',
  // passport.authenticate('local', { session: false, failWithError: true }),
  function (req, res, next) {
    text = req.body.content

    if (typeof req.body.content == 'undefined' || req.body.content == null) {
      res.json(['error', 'No data']);
    } else {
      converter.setOption('simplifiedAutoLink', 'true');
      html = converter.makeHtml(text)
      res.json( html);
    }
  },
  function (err, req, res, next) {
    return res.status(401).send({ success: false, message: err })
  });


app.post('/convertdate', (req, res, next) => {
  var error = ''

  const inputval = req.body.content
  if (/^\d+$/.test(inputval)) {
    // 1_000_000_000' =10^9 = 2001
    date_ = new Date(inputval * 1000)
    dd = date_.getDate()
    mm = date_.getMonth() + 1
    yyyy = date_.getFullYear()

  }
    else if (/^\d{4}-\d{2}-\d{2}T\d{2}/.test(inputval)) {
    date_ = inputval.split('T')[0]
    yyyy = date_.split('-')[0]
    mm = date_.split('-')[1]
    dd = date_.split('-')[2]
  }
  else {
    next('this is an error')
  }
  dat = dd + "." + mm + "." + yyyy;

  res.json({
    // result: inputval ,
    result: dat ,
    error: error
  });
});


app.listen(5000, () => {
  console.log(`Api on port 5000.`);
});
