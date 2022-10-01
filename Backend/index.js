const express = require('express');
//importing router
const subscriberRouter = require('./routers/subscriberRouter');
const userRouter = require ('./routers/userRouter')
const utilRouter = require ('./routers/Util')

const cors = require('cors');

const app= express();

const port= 5000;

//middleware
//for converting json to javascript

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000', 'http://127.0.0.1:5500']
}));
app.use('/subscriber',subscriberRouter);
app.use('/user',userRouter);
app.use('/util',utilRouter);

app.use(express.static('./static/resources'));
//routes


//to start the server
app.listen(port, () => {
    console.log('server started....');
} )