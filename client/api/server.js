// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./DB.js');
//what does cors do again?
const cors = require('cors');
const itemRoutes = require('./Item_route');

//make promise is not a promise
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

/* This is meaning that using the 
partial url 'items/
that the REST methods will be appended to the end of the url
for ex items/add will posted to the db in the form of 
the item model using logic from routes file */
app.use('/item', itemRoutes);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});