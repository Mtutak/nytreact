//Reach routing to contral tabs in Bootstrap
// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/");
var Result = require("../components/children/Result");
var Saved = require("../components/children/Saved");
var Search = require("../components/children/Search");


// Export the Routes
module.exports = (

  {/* The high level component is the Router component */}
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component; Passing in props to our
      component route is from a library but functioning as a comp that passing props path and component
    this path included in the route needs to be included as a path in the actual component*/}
      <Route path="result" component={Result} />
      <Route path="saved" component={Saved} />
      <Route path="search" component={Search} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

    </Route>
  </Router>

);
