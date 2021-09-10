import React, { Component } from "react";
import './clients.json'; // This is json file
import { connect } from 'react-redux';

class Clientprofile extends Component {
  render() {
    return (
      <div ClassName="Profile">
        <h2 className="card-title">firstName arrayItem.lastName</h2>
        <h5 className="card-title">arrayItem.company arrayItem.title</h5>
        <h5 className="card-title">arrayItem.street arrayItem.city arrayItem.zipCode arrayItem.country</h5>
        <h5 className="card-title">arrayItem.phone arrayItem.email</h5>
      </div>)
  }
}// ААААА. Не трогаю, потому
console.log();

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Clientprofile);
