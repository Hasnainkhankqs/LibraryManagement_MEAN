const mongoose  = require('mongoose');



// mongoose.set('useCreateIndex', true);

//connecting to mongodb using simple callback

// mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true } , (err , db) => {
//   if(!err){
//     console.log("success" , db);
//   }
//   else{
//     console.log("mongodb database connection failed");
//     process.exit(1);
//   }
// });



// let a = mongoose.connection.on('connected', (res) => {
//     console.log(`Mongoose connected to ${res}`);
//   });
//   console.log( "aaaaah",a.name);
//   mongoose.connection.on('error', (err) => {
//     console.log(`Mongoose connection error:`);
//     process.exit(1);
//   });
//   mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose disconnected');
//     process.exit(1);
//   });



//using promise

  mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true })
  .then((db) => console.log("database connected succesfully"))
  .catch((err) => { 
  console.log("mongodb database connection failed");
  process.exit(1);
});

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