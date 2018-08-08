var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

// serve static content for the app from the "public" directory
app.use(express.static(__dirname + "public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ exteneded: false }));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view enine", "handlebars");

// import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// start our server so it can begin listening to client requests
app.listen(PORT, function() {
  // log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
