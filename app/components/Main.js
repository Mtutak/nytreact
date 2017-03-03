// Include React
var React = require("react");
// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");
//Helper Function
var helpers = require("./utils/helper");
//A Main React Component
// contains the main-container div that holds the main layout and navigation. 
//This component should also be able to hold sub-components Search and Saved
var Main = React.createClass({
  // Component's render method
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

          <div className="row">
            <div className="text-center">
                <h2>Some Other Info</h2>
            </div>
          </div>

          <div className="container">
            {/* Includes the sub-component of Search and Saved from associated component folder */ }
            <div className="col-sm-12">
                <Search />
            </div>
            <div className="col-sm-12">
              <Saved />
            </div>
            {/* Added this.props.children to dump all of the child components into place 
            {this.props.children} */}

          </div>
        </div>
        <footer>NYT Article Scrubber</footer>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;