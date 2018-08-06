var express = require('express')

var router = express.Router();

// import the model (burger.js) to use its db functions
var burger = require("/models/burger.js")

// create all our routes and set the logic with in those routes where rewuired
router.get("/", function(req, res){

});