
    //created_at=req.created_at.split('T')[0]
    //yyyy=created_at.split('-')[0]    
    //mm=created_at.split('-')[1]    
    //dd=created_at.split('-')[2]    
    
    //create_at = dd + "/" + mm + "/" + yyyy;

//app.post("/ad", (req,res) => {
//const {a,b}=req.params
//res.send(`sum: ${a+b}`)    
//})

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const sayHi = (req, res) => {
  //a = parseInt(req.params.a)

  res.send("Hi!");
};

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
  //a = parseInt(req.body)
  //console.log(a)
  
   const { a,b } = req.body;
  res.send({
      result: parseInt(a) + parseInt(b)

  });
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});
