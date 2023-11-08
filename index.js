// const createError = require("http-errors");
const express = require('express');
const path = require('path');
const cookieParser= require("cookie-parser");
const logger =require('morgan');
const mongoose= require("mongoose");
mongoose.connect('mongodb+srv://Rathil:cJe6U7k0m1qfR6AW@cluster0.fibw1dl.mongodb.net/csv')

const indexRouter = require("./routes/index");

const app =express();


app.use("/", indexRouter);


app.listen(4000, function(){
    console.log("express is online");
});

module.exports = app;