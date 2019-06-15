const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for
let Item = new Schema({
    name: {type: String}
},
{   
    collection: 'item'
})

//export the model that is defined then called
export default mongoose.model('Item', Item)