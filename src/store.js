import { createStore } from 'redux';
import Clients from './Components/clients.json'; // This is json file

function clients(state = Clients) { // Clients is array data
  return state
}

export const store = createStore(clients); // This is reducers
export default store;
