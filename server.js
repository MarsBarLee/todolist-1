const express = require('express');
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017/todoList-db';
const bodyParser = require('body-parser');



// initailze express
const app = express();

//express middleware
app.use(bodyParser.json());

//have it respond to homepage request
app.get('/', (req,res) => {
    res.send('hello world')
});

//port its listening to responses on
app.listen(5000, ()=> {
    console.log('server on')
})

const MongoClient = mongodb.MongoClient;

MongoClient.connect(url, (err, db) => {
    
    console.log('Kudos. Connected successfully to server')
    // Perform queries
   
    
})