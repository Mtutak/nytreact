var React = require("react");

/*
 Here we are creating components that will be re-usable
 on the front end
*/
var Result = React.createClass({
render: function () {
        return (
            <div className="panel panel-default resultArt">
                <div className="panel-heading">
                    <h3 id="resultHeader" className="panel-title text-center">Results</h3>
                </div>
                <div className="resArticle panel-body">
                   
                            <div className="text-center">
                            {this.props.articles.map(function(item, i) {
                                return (
                                    <div key={i}>
                                        <h4>{item.title}</h4>
                                        <h5>{item.url}</h5>
                                    </div>
                                );
                            })}
                        {/*<div className="col-sm-6">
                            <button>Save</button>
                        </div>*/}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Result;