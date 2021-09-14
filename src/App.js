import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Clientslist from './Components/ClientsList/clientslist';
import { SearchNav } from './Components/Search/search';

import './App.css';
import './Components/clients.json'; // This is json file
import { Click } from './Components/ClientsList/Clientslistitem';

const App = () => {
return (
  <Router>
  <div className="App">
    <SearchNav />
    <Clientslist />
    <Click />
  </div>
  </Router> 
)
}
console.log();


export default App;
