
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ClientProfile from "./Components/ClientProfile/clientprofile";
import "./App.css";
import { SearchNav } from "./Components/Search/search";
import ClientList from "./Components/ClientsList/clientslist";

const App = () => {
  return (
    <Router>
      <div className="App">
        <SearchNav />
        <ClientList />
      <Switch>
      <Route exact path="/client/:index?">
            <Route
              exact
              path="/client"
              component={() => <div>Выберете клиента</div>}
            />
            <Route path="/client/:index" component={() => <ClientProfile />} />
      </Route>
      <Redirect exact from="/" to="/client/" />
      <Route />
    </Switch>
      </div>
    </Router>
  );
};
console.log();

export default App;