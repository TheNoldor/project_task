//import React, { Component }from "react";
//import { Click } from "./Clientslistitem";
//import { connect } from 'react-redux';
import React, { useState } from "react";
import ListItem from "./Clientslistitem";
import { NavLink } from "react-router-dom";

import clients from "../clients.json";

const ClientList = () => {
  const [value, setValue] = useState("");

  const filteredClients = clients.filter((client) => {
    return (
      client.general.firstName.toLowerCase().includes(value.toLowerCase()) ||
      client.general.lastName.toLowerCase().includes(value.toLowerCase())
    );
  });

  return (
    <div className="LeftForm">
      <div className="Search">
        <input
          type="text"
          class="form-control"
          placeholder="First or Last name..."
          id="searchBar"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="ClientsList">
        {filteredClients.map((client, id) => {
          return (
            <NavLink key={id} to={`/client/${id}`}>
              <ListItem client={client} id={id} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default ClientList;
