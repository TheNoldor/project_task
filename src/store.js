import { createStore } from "redux";
import Clients from "./Components/clients.json"; // This is json file

function index(state = Clients) {
  // Clients is array data
  return state;
}

export const store = createStore(index); // This is reducers
export default store;
