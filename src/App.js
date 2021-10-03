
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";
import ClientProfile from "./Components/ClientProfile/clientprofile";
import "./App.css";
import { SearchNav } from "./Components/Search/search";
import ClientList from "./Components/ClientsList/clientslist";
import { Provider } from "react-redux";
import store from "./store";
import ClientProfileA from "./actions/clientPropfileA";

function App(id){
  var client = id;
  console.log(client)
  console.log(id);
  let GetClient = ClientProfileA(id);
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <SearchNav />
        <ClientList />
      <Switch>
      <Route exact path="/client/:index?">
            <Route
              exact
              path="/client"
              component={() => <ClientProfile />}
            />
            <Route exactpath= {"/client/"+id}
              render = {() =>  (<ClientProfile id={GetClient}/>)} />
      </Route>
      <Redirect exact from="/" to="/client/" />
      <Route />
    </Switch>
      </div>
    </Router>
    </Provider>
  );
};
console.log();

export default App;