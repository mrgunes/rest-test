
const path = require("path");
const showdown = require('showdown');

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + "/public"));

app.use('/assets', express.static('assets'))

app.post('/login', function (req, res) {
  res.send("Authenticated");
},
);

converter = new showdown.Converter()

app.post("/convertmd", function (req, res, next) {

  text = req.body.content

  if (typeof req.body.content == 'undefined' || req.body.content == null) {
    res.json(['error', 'No data']);
  } else {
    converter.setOption('simplifiedAutoLink', 'true');
    html=converter.makeHtml(text)

    res.json(['markdown', html]);

  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/convertdate", (req, res) => {
  res.sendFile(path.join(__dirname, 'convertdate.html'));
});

app.get("/calculate", (req, res) => {
  res.sendFile(path.join(__dirname, 'calculate.html'));
});

app.post('/convertpost', (req, res) => {

  // const { inputval } = JSON.stringify(req.body)
  const { inputval } = req.body
  // if (inputval.includes('T')) {
  //   date_ = inputval.split('T')[0]
  //   yyyy = date_.split('-')[0]
  //   mm = date_.split('-')[1]
  //   dd = date_.split('-')[2]
  // } else {
  //   date_ = new Date(inputval * 1000)
  //   dd = date_.getDate()
  //   mm = date_.getMonth() + 1
  //   yyyy = date_.getFullYear()

  // }
  // dat = dd + "." + mm + "." + yyyy;
  dat = inputval

  res.send({
    result: dat

  });
});

app.listen(5000, () => {
  console.log(`Server on port 5000.`);
});
