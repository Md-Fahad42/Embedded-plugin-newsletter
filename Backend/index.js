const express = require('express');
//importing router
const subscriberRouter = require('./routers/subscriberRouter');

const cors = require('cors');

const app= express();

const port= 5000;

//middleware
//for converting json to javascript

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use('/subscriber',subscriberRouter);

//routes


//to start the server
app.listen(port, () => {
    console.log('server started....');
} )