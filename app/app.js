// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
// Include the Main Component
var Main = require("./components/Main");
// Grabs the Routes
// var routes = require("./config/routes");

// ReactDOM.render(routes, document.getElementById("app"));

// Renders the contents according to the route page.
ReactDOM.render(<Main />, document.getElementById("app"));
