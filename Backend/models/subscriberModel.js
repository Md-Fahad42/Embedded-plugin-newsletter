 const {Schema, model} = require('../connection');


const detail= new Schema({
    name: String,
    email: String,
    owner: String,
    id : Number,
    createdAt: Date,
})

//name of collection
module.exports = model('subscriber', detail);

