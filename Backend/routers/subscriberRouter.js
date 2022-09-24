const express = require('express');

const router = express.Router();

const Model = require('../models/subscriberModel');

router.post('/add',(req,res) => {
    const formdata = req.body;
    console.log(formdata);
    
    //to save data
    new Model(formdata).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).res.json(err);
    }); 
    
});  

//to fetch the data

router.get('/getall',(req, res) => {
    Model.find()
    .then((result)=> {
        console.log(result);
        res.json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).res.json(err);
        });
    
});

//delete operation
router.delete('/delete/:id',(req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        console.log(result);
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;