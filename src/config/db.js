const mongoose = require('mongoose');

const connectionString ="mongodb+srv://shaharyarali:csc21f116@shaharyarali.imbnz.mongodb.net/?retryWrites=true&w=majority&appName=shaharyarali";

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

}

module.exports = connectDB;