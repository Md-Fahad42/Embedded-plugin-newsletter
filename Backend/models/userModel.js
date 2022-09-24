const {Schema, model} = require('../connection')


const detail= new Schema({
    name: String,
    email: String,
    id: Number,
    password: String,
})

//name of collection
module.exports = model('user', detail);