const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bookModel = require("../model/book");




const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.accessTokenSecret, (err, user) => {
            if (err) {
                return res.status(403).send("token not verified");
            }
            else {
                req.user = user;
                next();
            }
        });
    } 
    else {
        res.status(401).send("token not present");
    }
};

router.get("/getbooks", authenticateJWT ,async (req, res , next) => {

    await bookModel.find((err, result) =>{
        if (!err) {
            const allBooks = result;
            res.status(200).json(allBooks);
        }
        
        else {
            err.message = "Failed to load books"
            next(err);
        }
    });
    
    

})


//post request 
router.post("/addbooks" ,authenticateJWT, (req,res,next) =>{
    const { role } = req.user;
    const reqBook = req.body;

    // pehly req.body men bs req.body.bookname or req.body.bookqty thy ab in dono k sath req.body.user bhi hai 
    // q k authenticateJWT ny isy request men add krdia

    if (role == 'librarian') {
        return res.status(403).send("you are librarian can't add book only admin can");
    }

    else {
        const book = new bookModel({bookqty : reqBook.bookqty , bookname : reqBook.bookname});
        book.save().then((data) => {
     
        res.json({data})

    }).catch((err) => {

        err.whereError = "Error occured in saving book";
        next(err)
    })
    }
});


module.exports = router;