const mongoose = require('mongoose');

const dbName= 'wrr1300';

const url = `mongodb+srv://fahad123:Fahad123@cluster0.io2jczv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

//asynchronous function returm promiise
mongoose.connect(url)
.then((result) => {
    console.log('Database Connected');
}) .catch((err) => {
    console.log(err);
});
module.exports= mongoose;