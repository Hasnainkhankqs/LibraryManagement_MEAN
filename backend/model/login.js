const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : { 
        type : String,
        required : true,
        max : [50, "Max Length is 50 characters"]
     },
    password : { 
        type : String,
        required : true
    },
    role : { 
        type : String,
        required : true
    }
});

module.exports = mongoose.model('UserModel', userSchema , "userCollection");