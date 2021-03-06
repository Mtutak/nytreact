// Include React
var React = require("react");
// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Result = require("./children/Result");
//Helper Function
var helper = require("./utils/helper");
//A Main React Component
// contains the main-container div that holds the main layout and navigation. 
//This component should also be able to hold sub-components Search and Saved
var Main = React.createClass({
    // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {  searchTerm: "",
              beginDate: "",
              endDate:"",
              results: [],
              saved: []
          };
  },
  componentDidUpdate: function () {
    console.log("Did Update!");
    //Run the NYT query for the values input on form through axios helper
    helper.getArticles(this.state.searchTerm, this.state.beginDate, this.state.endDate).then(function(data){
      console.log("API Request Result", data);
      this.setState({results: data});
      //after receive data from query post the data to our DB
      helper.postArticle(this.state.results).then(function() { 
        console.log("Updated Search Results in DB!");
          // finish post then show saved article history
           helper.getSaved().then(function(response) {
            //Saved Articles Retrieved
            console.log("Saved", response.data);

            this.setState({ saved: response.data });

          }.bind(this));
      }.bind(this));
    }.bind(this));
  },
   setTerm: function(term, start, end) {
    this.setState({
      searchTerm: term,
      beginDate: start,
      endDate: end
    });
  },
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>New York Times Article Scrubber</h1>
            <p><em>Search for and annotate articles of interest!</em></p>
            <a href="#/info"><button className="btn btn-default">Info</button></a>
            <a href="#/chat"><button className="btn btn-default">Comments</button></a>
          </div>

          <div className="container">
            {/* Includes the sub-component of Search and Saved from associated component folder */ }
            <div className="col-sm-12">
            {/* Includes the props setTerm which is a method of the Main component */ }
                <Search setTerm={this.setTerm}/>
            </div>
            <div className="col-sm-12">
                <Result articles={this.state.results} />
            </div>
            <div className="col-sm-12">
                <Saved saveArt={this.state.saved}/>
            </div>
            {/* Added this.props.children to dump all of the child components into place 
            {this.props.children} see the contents of the Main.js children
            nesting of result, saved, search*/}

          </div>
        </div>
        <footer>NYT Article Scrubber</footer>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;