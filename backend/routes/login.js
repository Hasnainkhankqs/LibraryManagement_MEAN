const express = require('express');
const loginroutes = express.Router();

// login model
const userModel = require("../model/login");




/*  "/api/login"
 *    GET: finds all login
 *    POST: creates a new user
 */

loginroutes.get("/loginroutes", function (req, res , next) {

    userModel.find((err, result) => {

        if (err) {
            err.message = "Failed to load users"
            next(err);
        }

        else {
            res.status(200).json(result);
        }
    })

});


loginroutes.post("/loginroutes", (req, res, next) => {
    const user = new userModel({
        name : req.body.name,
        password : req.body.password,
        role : req.body.role,
        
    });


    user.save()
      .then(
        item => {
            res.json({
                result: {
                    output: item,
                    greet: "shukar"
                }
            })
        })
        .catch(
        err => {

            err.status = 500;
            err.reason = "insertion of user failed";
            next(err);

        }
    )
});

/*  "/login/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

loginroutes.get("/loginroutes/:id", function (req, res) {
});

loginroutes.put("/loginroutes/:id", function (req, res) {
});

loginroutes.delete("/loginroutes/:id", function (req, res) {
});

module.exports = loginroutes;