// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./DB.js');
//what does cors do again?
const cors = require('cors');

//make mongoose into a promise
// its promise is not a promise
// at least until 5.0
//connect to db with url and resolve or check error->
//whats happening with the .connect method
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);




//middleware 
app.use(cors());
//urlencoded?
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});