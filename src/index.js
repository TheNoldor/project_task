import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import Clients from './Components/clients.json'; // This is json file
import App from './App';

function clients(state = Clients) { // Clients is array data
  return state
}

const store = createStore(clients); // This is reducers

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
  console.log();