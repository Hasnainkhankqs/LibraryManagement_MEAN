const mongoose  = require('mongoose');



//using promise

mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true })
.then((db) => console.log("database connected succesfully"))
.catch((err) => { 
console.log("mongodb database connection failed");
process.exit(1);
});


// mongoose.set('useCreateIndex', true);

//connecting to mongodb using simple callback

// mongoose.connect(process.env.DB_URI ,
//    { useNewUrlParser : true , useUnifiedTopology: true } ,
//     (err , db) => {
//   if(!err){
//     console.log("success" , db);
//   }
//   else{
//     console.log("mongodb database connection failed");
//     process.exit(1);
//   }
// });


// using async await 

  // async function mongooseconnection(){
  //   let db
  //   try {

  //     db = await mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true })
      
  //     console.log("database connected successfully")
     
  //   } catch (error) {
  //     console.log("mongodb database connection failed");
  //     process.exit(1);
  //   }
  // }

  // mongooseconnection();