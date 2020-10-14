const mongoose  = require('mongoose');



// mongoose.set('useCreateIndex', true);

//connecting to mongodb

mongoose.connect(process.env.DB_URI , { useNewUrlParser : true , useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${process.env.DB_URI}`);
  });
  mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });