

//app.post("/ad", (req,res) => {

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.use('/assets', express.static('assets'))

app.post('/login', function (req, res) {
  res.send("Authenticated");
},
);

app.post("/convert", function (req, res, next) {
  console.log(req.body);
  if (typeof req.body.content == 'undefined' || req.body.content == null) {
    res.json(['error', 'No data']);
  } else {
    res.json(['markdown', req.body.content]);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/convertdate", (req, res) => {
  res.sendFile(path.join(__dirname, "convertdate.html"));
});
app.post('/add', (req, res) => {

  const { val } = req.body;
  date_ = val.split('T')[0]
  yyyy = date_.split('-')[0]
  mm = date_.split('-')[1]
  dd = date_.split('-')[2]
  date_ = dd + "/" + mm + "/" + yyyy;

  res.send({
    result: date_

  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
