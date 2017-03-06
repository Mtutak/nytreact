// Require mongoose
var mongoose = require("mongoose");
//Creating the Mongoose Schema and Model for Collection
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var NotesSchema = new Schema({
  // title is a required string
  note: {
    type: String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now,
    required: true 
  },
  // link is a required string
  connectArticleId: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Notes = mongoose.model("Notes", NotesSchema);

// Export the model
module.exports = Notes;
