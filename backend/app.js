
const express = require("express");
const app = express();
const ErrorHandler = require('./middlewares/error')
app.use(express.json());

// route import 

const product = require('./routes/productRoute');
const user = require('./routes/userRoute');
app.use("/api/", product);
app.use("/api/", user);
app.use(ErrorHandler);
module.exports = app;