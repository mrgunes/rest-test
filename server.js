

//app.post("/ad", (req,res) => {
//const {a,b}=req.params
//res.send(`sum: ${a+b}`)    
//})

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder
app.use('/assets', express.static('assets'))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/add', (req, res) => {
  
   const { val } = req.body;
   date_=val.split('T')[0]
        yyyy=date_.split('-')[0]    
        mm=date_.split('-')[1]    
        dd=date_.split('-')[2]    
        date_ = dd + "/" + mm + "/" + yyyy;

  res.send({
      result: date_ 
      
  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
