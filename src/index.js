const experss = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();
