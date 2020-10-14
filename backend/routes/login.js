const express = require('express');
const loginroutes = express.Router();

// login model
const userModel = require("../model/login");



// Generic error handler used by all endpoints.
function handleRoutesError(res, reason, message, code) {
 
    res.status(code || 500).json({"error": message , "reason" : reason});
  
}



/*  "/api/login"
 *    GET: finds all login
 *    POST: creates a new user
 */

loginroutes.get("/loginroutes", function(req, res) {

    userModel.find((err,result) => {

        if(err){
            handleRoutesError(res, err.message, "Failed to get users.");
        }

        else{
            res.status(200).json(result);
        }
    })

});


loginroutes.post("/loginroutes", function(req, res) {
    const user = new userModel(req.body);

    user.save().then(
        item => {
            res.json({
                result : {
                    output : item,
                    greet : "shukar"
                }
            })
        }
    ).catch(
        err => {
            // res.status(400).send(err );
            handleRoutesError(res, err.message, "Failed to add user.");

        }
    )
});

/*  "/login/:id"
 *    GET: find user by id
 *    PUT: update user by id
 *    DELETE: deletes user by id
 */

loginroutes.get("/loginroutes/:id", function(req, res) {
});

loginroutes.put("/loginroutes/:id", function(req, res) {
});

loginroutes.delete("/loginroutes/:id", function(req, res) {
});

module.exports = loginroutes;