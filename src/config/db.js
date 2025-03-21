const mongoose = require('mongoose');

const connectionString ="mongodb+srv://shaharyarali209:TJ3IWlwera98wzp@cluster0.xeiij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

}

module.exports = connectDB;