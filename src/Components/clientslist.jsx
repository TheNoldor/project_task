import React, { Component }from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import './clients.json'; // This is json file
import Clientprofile from "./clientprofile";

class Clientslist extends Component {
  render(){
  return(
      <div className='List'>
         <ul>
        {
        this.props.testStore.map((arrayItem, index) =>
        <NavLink to={'/profile/' + index}>
          <li key={index} onClick={() => <Clientprofile />}> <span>{arrayItem.general.firstName} {arrayItem.general.lastName}</span></li>
          </NavLink>)
        }
      </ul>
      </div>)
    }   
}

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(Clientslist);
