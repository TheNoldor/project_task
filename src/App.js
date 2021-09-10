import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import Clientprofile from './Components/clientprofile';
import Clientslist from './Components/clientslist';
import './Components/clients.json'; // This is json file

class App extends Component {
  render() {
    console.log(this.props.testStore); // full array
    return (
      <Router>
      <div className="App">
      <label class="input-group">Search
      <input type="text" onkeypress="searchFilter()" class="form-control" placeholder="Search by name or anything" id="searchBar"/>
      </label>
        <Clientslist />
        
      <Route path = '/profile/'
      render= { () => <Clientprofile />} />
      </div>
      </Router> 
    );
  }
}
console.log();


export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
