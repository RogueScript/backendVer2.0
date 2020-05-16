
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
//require("dotenv").config();
const mongoDB = require("mongoose"); // database instance
const conRouter = require("./router/connectionRoutes.js")

const app = express();
const port = process.env.PORT || 8000;
// Database connection 
mongoDB.connect("mongodb://localhost:27017/bakery", {useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log("Mongo DB connection successful")});
// working on routes
// third party module
app.use(bodyParser.json());
app.use("/API", conRouter );
app.use(morgan("dev"));
app.listen(port, ()=>{console.log("Connection success")});