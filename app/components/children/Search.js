//queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

var React = require("react");

/*
 Here we are creating components that will be re-usable
 on the front end
*/
var Search = React.createClass({
    render: function () {
        /* var studentExtraCurricular = this.props.extraCurricular.map(function (hobby, index) {
            return (<li key={index}>{hobby}</li>);
        }); */
        return (
            <div className="panel panel-default">
                 <div className="panel-heading">
                    <h3 id="searchHeader" className="panel-title text-center">Search</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label for="topic">Topic:</label>
                            <input type="search" className="form-control" id="topic"/>
                        </div>
                        <div className="form-group">
                            <label for="start">Start Year:</label>
                            <input type="month" className="form-control" id="start"/>
                        </div>
                        <div className="form-group">
                            <label for="end">End Year:</label>
                            <input type="month" className="form-control" id="end"/>
                        </div>
                        <button type="submit" class="btn btn-default">Search</button>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = Search;