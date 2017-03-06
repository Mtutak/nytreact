var React = require("react");

/*
 Here we are creating components that will be re-usable
 on the front end
*/
var Result = React.createClass({
render: function () {
        /* 
        var studentExtraCurricular = this.props.extraCurricular.map(function (hobby, index) {
            return (<li key={index}>{hobby}</li>);
        });
        */ 
        return (
            <div className="panel panel-default resultArt">
                <div className="panel-heading">
                    <h3 id="resultHeader" className="panel-title text-center">Results</h3>
                </div>
                <div className="resArticle panel-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4>Article Title</h4>
                            <p>{this.props.articles}</p>
                        </div>
                        <div className="col-sm-6">
                            <button>Save</button>
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
module.exports = Result;