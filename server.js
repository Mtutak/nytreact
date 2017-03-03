
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Requiring our Article models via mongoose for mongoDB
var Article = require("./models/Articles.js");
// Requesting Data
var request = require("request");
// Mongoose bluebird promises
var Promise = require("bluebird");

mongoose.Promise = Promise;


// Initialize Express
var app = express();
// Sets an initial port
var PORT = process.env.PORT || 3000;
// Use morgan and body parser with our app
app.use(logger("dev"));
//bodyParser formatting goods
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Make public a static dir
app.use(express.static("public"));

// MongoDB configuration with Mongoose
// -------------------------------------------------
var db;
//connecting to mongodb
mongoose.connect("mongodb://localhost/studentRoster", function (err) {
    if (err) {
        console.log("Connection Failed!", err);
    } else {
        console.log("Connection Successful!");
        db = mongoose.connection;
    }
});

// Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// -------------------------------------------------


// Routes
// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  History.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.location);

  // Here we'll save the location based on the JSON input.
  // We'll use Date.now() to always get the current date time
  History.create({
    location: req.body.location,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});



// Listen on port 3000
// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App running on PORT:" + PORT);
});
