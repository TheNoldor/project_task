//import React, { Component }from "react";
//import { Click } from "./Clientslistitem";
//import { connect } from 'react-redux';
import React from "react";
import ListItem from "./Clientslistitem";
import clients from "../clients.json";



const ClientList = () => {
  return (
    <div className="ClientsList">
      {
        clients.map((client, index) => (
            <ListItem 
            client={client} 
            id={index} 
            />
        ))}
    </div>
  )
}

export default ClientList;
