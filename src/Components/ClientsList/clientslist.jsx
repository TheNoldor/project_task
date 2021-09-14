import React, { Component }from "react";
import {  NavLink } from "react-router-dom";
import { Click } from "./Clientslistitem";
import { connect } from 'react-redux';
import '../clients.json'; // This is json file


class Clientslist extends Component {
  render(){
  return(
      <div className='ClientsList'>
         <ul>  
        {
        this.props.testStore.map((arrayItem, index) => (
        <NavLink to={'/profile/' + index}>
          <li listItem key={index} arrayItem = {arrayItem} 
          onClick={() => Click(arrayItem, index)}> 
          <span>{arrayItem.general.firstName} {arrayItem.general.lastName}</span> </li>
          </NavLink>))
        }
      </ul>
      </div>
      )
      
    }   
} //Изменения

export default connect(
    state => ({
      testStore: state
    }),
    dispatch => ({})
  )(Clientslist);
