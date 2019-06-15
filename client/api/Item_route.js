const express = require('express')

//this is what maps actions to routes?
/*
    Router is how REST is implemented
    so once we call router->
    from router we can call post on the route('/add')
    we could call put if we wanted
    it lets the urls and the actions be closely 
    AND loosely connected together
*/
const itemRoutes = express.Router()

//we need the model of the element to
//info from the route
//to give and get
//from the database
let Item = require('./items_model')


itemRoutes.route('/add').post( () => {
    let item = new Item(req.body)
    item.save()
    .then(item => {
        res.status(200).json({'item': 'item has been added '})
    }).catch(err => {
        res.status(400).send("unable to save to database");
        });
})

// Defined get data(index or listing) route
itemRoutes.route('/').get(function (req, res) {
    Business.find(function(err, items){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

export default itemRoutes;