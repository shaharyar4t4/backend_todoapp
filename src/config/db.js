const mongoose = require('mongoose');

const connectionString ="";

const mongoose = async () => {
  try{
    const conn = await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

}

module.exports = connectDB;