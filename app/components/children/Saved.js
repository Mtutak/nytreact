//displays the Saved Articles that were searched and stored in the database
var React = require("react");

/*
 Here we are creating components that will be re-usable
 on the front end
*/
var Saved = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 id="savedHeader" className="panel-title text-center">Saved Articles</h3>
                </div>
                <div className="savedArticle panel-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <h4>Article Title</h4>
                        </div>
                        <div className="col-sm-4">
                            <h5>Date Saved: </h5>
                        </div>
                        <div className="col-sm-4">
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h5>Information On Article</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Saved;