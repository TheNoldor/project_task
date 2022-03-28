import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ClientProfile from "./Components/ClientProfile";
import ClientList from "./Components/ClientsList";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ClientList />
        <Switch>
          <Route exact path="/client/:id?">
            <Route
              exact
              path="/client"
              component={() => <div>Выберете клиента</div>}
            />
            <Route path="/client/:id" component={() => <ClientProfile />} />
          </Route>
          <Redirect exact from="/" to="/client/" />
          <Route />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
