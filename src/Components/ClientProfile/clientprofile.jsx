import React from "react";
import { connect } from 'react-redux';


import '../clients.json'; // This is json file

const Clientprofile = (general) => {
  console.log(general.firstName);
    return (
      <div className="Clients1Profile">
      <span className="firstName"> Имя {general.firstName} </span>
       Фамилия
       Адресс
      </div>)
  }
console.log();

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Clientprofile);
