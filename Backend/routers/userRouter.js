const express = require("express")
const router = express.Router()
const Model = require("../models/userModel")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10)

router.post("/signup", (req, res) => {
  const formdata = req.body
  console.log(formdata)
  const hash = bcrypt.hashSync(formdata.password, salt)
  formdata.password = hash

  //to save data
  new Model(formdata)
    .save()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).res.json(err)
    })
})

//to fetch the data

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log(result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).res.json(err)
    })
})

// router.get('/getbyemail/:email',(req, res)=> {
//     console.log(req.params.email);
//     Model.find({email: req.params.email})
//     .then((result)=> {
//      console.log(result);
//      res.json(result);
//      })
//      .catch((err)=>{
//          console.log(err);
//          res.status(500).res.json(err);
//      });
// })

// for login data
//for login page
router.post("/authenticate", (req, res) => {
  const formdata = req.body
  console.log(formdata)

  Model.findOne({ email: formdata.email })
    .then((result) => {
      //logic for validating user credentials
      //if email and password matches then result will contain their data
      if (result) {
        if (bcrypt.compareSync(formdata.password, result.password))
            res.json(result)
        else {
          res.status(401).json({
            status: "Login Failed",
          })
        }
      } else {
        //if result is null
        res.status(401).json({ status: "Login Failed" })
      }
    }) //logic for validating user credentials
    //if email and password matches then result will contain their data

    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
})

module.exports = router
