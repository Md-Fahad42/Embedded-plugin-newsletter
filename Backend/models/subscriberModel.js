 const {Schema, model, Types} = require('../connection');


const detail= new Schema({
    name: String,
    email: String,
    owner: {type : Types.ObjectId, ref : 'user'},
    createdAt: Date,
})

//name of collection
module.exports = model('subscriber', detail);

