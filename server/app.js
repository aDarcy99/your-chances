// Load environment variables from .env folder
require("dotenv").config();
//Requires
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//use express
const app = express();
var port = 3000;
//Use static files in public on every route(middleware)
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../src")));
app.use(express.static(path.join(__dirname, "../dist")));
//req.body middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//Listen to port
app.listen(process.env.PORT || port, ()=>{
    console.log(`server started on ${port}`);
})