const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT



app.get("/" , (req , res ) => {
    res.send("get request hit")
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404 ;
    next(err);
 });


app.use((err, req , res , next ) => {
    res.status(err.status || 500);
    res.json({
        error : {
            status : err.status,
            message : err.message
        }
    })    
});





app.listen(port, () => {
    console.log(`server started on port ${port}`);
});