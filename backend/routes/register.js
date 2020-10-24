const express = require("express");
const router = express.Router();
const UserModel = require("../model/user");

router.get("/register",async (req, res , next) => {

    await UserModel.find((err, result) =>{
        if (!err) {
            const allUsers = result;
            res.status(200).json(allUsers);
        }
        
        else {
            err.message = "Failed to load users";
            err.whereError = "Error occured in veiwing users from register router";
            next(err);
        }
    });
    
    

})


//post request 
router.post("/register" , (req,res,next) =>{
    const reqRegister = req.body;

    // if we want to save some selected values then use then
    // const User = new UserModel({name : reqRegister.name , password : reqRegister.password,role : reqRegister.role});
    // if we want to save all values use this
  const User = new UserModel(reqRegister);
  
    User.save().then((data) => {
     
        res.json({data})

    }).catch((err) => {

        err.whereError = "Error occured in registring user";
        next(err)
    })
})
module.exports = router;