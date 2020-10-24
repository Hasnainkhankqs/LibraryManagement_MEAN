const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema({
    bookname : {type : String , required:true , maxlength : 100},
    bookqty : {type:Number , required: true}
})


module.exports = mongoose.model("BookModel", BookSchema , "BookCollection")