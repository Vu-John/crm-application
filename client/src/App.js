import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// import "assets/css/material-dashboard-react.css";
import "assets/css/material-dashboard-react.css?v=1.3.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
