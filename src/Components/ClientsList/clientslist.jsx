//import React, { Component }from "react";
//import { Click } from "./Clientslistitem";
//import { connect } from 'react-redux';
import React from "react";
import ListItem from "./Clientslistitem";
import clients from "../clients.json";
import { NavLink } from "react-router-dom";



const ClientList = () => {
  return (
    <div className="ClientsList">
      {
        clients.map((client, index) => (
          <NavLink to={`/client/` + index}>
            <ListItem client={client} id={index} />
          </NavLink>
        ))}
    </div>
  )
}

export default ClientList;
