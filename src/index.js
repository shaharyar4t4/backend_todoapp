const express = require('express');
const connectDB = require('./config/db');

// connect to database
connectDB();

// initialize server
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
})
