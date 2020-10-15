require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const cors = require('cors')
const port = process.env.PORT

//adding mongodb connection
require("./backend/database/db");





//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

//getting all routes

const loginroute = require('./backend/routes/login');

// RESTful API root
app.use('/api', loginroute);



//root point for testing
app.get("/" , (req , res ) => {
    res.send("root get request hit")
})




// Find 404 and hand over to error handler
app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404 ;
    next(err);
 });


//error handler
app.use((err, req , res , next ) => {
    res.status(err.status || 500);
    res.json({
        error : {
            status : err.status,
            message : err.message,
            reason : err.reason
        }
    })    
});

app.listen(port, () => {
    
    console.log(`server started on port ${port}`);
  
});