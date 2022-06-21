
const express = require("express");
const app = express();
const ErrorHandler = require('./middlewares/error')
app.use(express.json());

// route import 

const product = require('./routes/productRoute');
app.use("/api/", product);
app.use(ErrorHandler);
module.exports = app;