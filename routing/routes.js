var Routes = function(app) {

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
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = "";
      result.link = "";

    // Using our Article model, create a new entry
    // This effectively passes the result object to the entry (and the title and link)
      var entry = new Article(result);

      // Now, save that entry to the db
      entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });
      res.send("Article Save Complete");
  }); 
// Main "/" Route. This will redirect the user to our rendered React application
  app.get("*", function(req, res) {
    //Load your single HTML page in public/index
    res.sendFile(__dirname + "/public/index.html");
  }); 
}

module.exports = Routes;