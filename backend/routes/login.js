const express = require('express');
const { nextTick } = require('process');
const loginroutes = express.Router();

// login model
const userModel = require("../model/login");




/*  "/api/login"
 *    GET: finds all login
 *    POST: creates a new user
 */

loginroutes.get("/loginroutes", function (req, res) {

    userModel.find((err, result) => {

        if (err) {
            handleRoutesError(res, err.message, "Failed to get users.");
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