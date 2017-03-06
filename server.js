
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Routes = require("./routing/routes.js");
// Requiring our Article models via mongoose for mongoDB
var Article = require("./models/Articles.js");
var Notes = require("./models/Notes.js");
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
var connectUrl;
//connecting to mongodb...set up for nonlocal
if (process.env.PORT) {
    connectUrl = "entermongodb";
} else {
    connectUrl = "mongodb://localhost/nytreact";
}
mongoose.connect(connectUrl, function (err) {
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
//See Dependency for routing/routes.js: var Routes = require("./routing/routes.js");
        // // Main "/" Route. This will redirect the user to our rendered React application
        // app.get("/", function(req, res) {
        //   res.sendFile(__dirname + "/public/index.html");
        // });

        // // This is the route we will send GET requests to retrieve our most recent search data.
        // // We will call this route the moment our page gets rendered
        // app.get("/api", function(req, res) {

        //   // We will find all the records, sort it in descending order, then limit the records to 5
        //   History.find({}).sort([
        //     ["date", "descending"]
        //   ]).limit(5).exec(function(err, doc) {
        //     if (err) {
        //       console.log(err);
        //     }
        //     else {
        //       res.send(doc);
        //     }
        //   });
        // });

        // // This is the route we will send POST requests to save each search.
        // app.post("/api", function(req, res) {
        //   console.log("BODY: " + req.body.location);

        //   // Here we'll save the location based on the JSON input.
        //   // We'll use Date.now() to always get the current date time
        //   History.create({
        //     location: req.body.location,
        //     date: Date.now()
        //   }, function(err) {
        //     if (err) {
        //       console.log(err);
        //     }
        //     else {
        //       res.send("Saved Search");
        //     }
        //   });
        // });

app.get("/api/saved", function(req, res) {
    //Query MongoDB for all saved articles
      // Grab every doc in the Articles array
      Article.find({}, function(error, doc) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
          res.json(doc);
        }
      });

  });
  app.put("/api/saved", function(req, res) {
    //Delete a saved article in MongoDB db
      // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
      Article.findOne({ "_id": req.params.id })
      .exec(function(error, doc) {
        // Log any errors
        if (error) {
          console.log(error);
        }
        // Otherwise, send the doc to the browser as a json object
        else {
          res.json(doc);
        }
      });

  }); 

  app.post("/api/saved", function(req, res) {
    //Save new article to the database 
      // Save an empty result object
      console.log(req.body.data);
      var result = req.body.data;

      result.forEach(function(resObj){
            // Using our Article model, create a new entry
            // This effectively passes the result object to the entry (and the title and link)
            var entry = new Article(resObj);

            // Now, save that entry to the db
            entry.save(function(err, doc) {
                // Log any errors
                if (err) {
                console.log(err);
                }
                // Or log the doc
                else {
                console.log(doc);
                console.log("Successful Save!");
                }
            });

      });
      res.send("Article Save Complete");
  }); 
// Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", function(req, res) {
    //Load your single HTML page in public/index
    res.sendFile(__dirname + "/public/index.html");
  }); 



// Listen on port 3000
// -------------------------------------------------
app.listen(PORT, function() {
  console.log("App running on PORT:" + PORT);
});
