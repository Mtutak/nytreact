//queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

var React = require("react");

/*
 Here we are creating components that will be re-usable
 on the front end
*/
var Search = React.createClass({
    // Initial State for form
  getInitialState: function() {
    return { term: "",
             startMo: "",
             endMo: ""
            };
  },
  handleChange: function(event) {
      //multiple inputs capturing change
      var value = event.target.value;
      var name = event.target.name;

      this.setState({
          [name]: value
      })
  },
  // When a user submits...
  handleSubmit: function(event) {
    // preventing the form from trying to submit itself
    event.preventDefault();
    // Set the parent to have the search term, start and end date
    this.props.setTerm(this.state.term,this.state.startMo,this.state.endMo);

    // Clearing the input field after submitting
    this.setState({
        term: "",
        startMo: "",
        endMo: ""
    });
  },
    render: function () {
        {/* var studentExtraCurricular = this.props.extraCurricular.map(function (hobby, index) {
            return (<li key={index}>{hobby}</li>);
        }); */}
        return (
        <div>
            <div className="panel panel-default">
                 <div className="panel-heading">
                    <h3 id="searchHeader" className="panel-title text-center">Search</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="topic">Topic:</label>
                            <input 
                                type="search" 
                                value={this.state.term}
                                onChange={this.handleChange}  
                                className="form-control" 
                                name="term" 
                                id="topic"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start">Start Year:</label>
                            <input 
                                type="month" 
                                value={this.state.startMo}
                                onChange={this.handleChange}  
                                className="form-control" 
                                name="startMo" 
                                id="start"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end">End Year:</label>
                            <input 
                                type="month" 
                                value={this.state.endMo}
                                onChange={this.handleChange} 
                                className="form-control" 
                                name="endMo" 
                                id="end"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-default">Search</button>
                    </form>
                </div>
            </div>
            {/* < Result /> */}
        </div>
        );
    }
});
module.exports = Search;