const express = require('express');

const router = express.Router();

const Model = require('../models/subscriberModel');

router.post('/signup',(req,res) => {
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
    
})


//for login page
router.post('/authenticate',(req,res)=>{
    const formdata= req.body;
        console.log(formdata);
         
         Model.findOne({email: formdata.email})
        .then((result)=> {
    
            //logic for validating user credentials
    //if email and password matches then result will contain their data
    
    
            if(result){
                if(bcrypt.compareSync(formdata.password, result.password))
                res.json(result);
                else{
                    res.status(401).json(
                        {
                            status : 'Login Failed'}
                    )
                }
            } else{
                //if result is null
                res.status(401).json({status: 'Login Failed'})
            }
            
    
    }) //logic for validating user credentials
    //if email and password matches then result will contain their data
    
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    })

module.exports = router;