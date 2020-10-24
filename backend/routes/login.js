const express = require('express');
const jwt = require('jsonwebtoken');
const loginroutes = express.Router();
const userModel = require("../model/user");



loginroutes.get("/login", (req, res , next) => {

    userModel.find((err, result) => {

        if (!err) {
            const allUsers = result;
            res.status(200).json(allUsers);
        }
        
        else {
            err.whereError = "Error occured in veiwing from login user route";
            err.message = "Failed to load users";
            next(err);
        }
    })

});


loginroutes.post("/login", async (req, res, next) => {

    
    const user = await userModel.findOne({

        name : req.body.name , password : req.body.password
    });

    
    if(user) {
    console.log("user exists");

    const accessToken = jwt.sign({ name: user.name,  role: user.role }, process.env.accessTokenSecret);
    res.json({
        accessToken
    });
    }
    

    else{
        console.log("Username or password incorrect");
        res.json({
            message: "Username or password incorrect"
        })
    }

});


loginroutes.get("/loginroutes/:id", function (req, res) {
});

loginroutes.put("/loginroutes/:id", function (req, res) {
});

loginroutes.delete("/loginroutes/:id", function (req, res) {
});

module.exports = loginroutes;