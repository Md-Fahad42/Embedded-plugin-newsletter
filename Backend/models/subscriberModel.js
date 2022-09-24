 const {Schema, model} = require('../connection');


const detail= new Schema({
    name: String,
    email: String,
    owner: String,
    createdAt: Date,
    
})

//name of collection
model('subscriber', detail);

