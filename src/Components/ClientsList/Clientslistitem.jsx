import React from "react";
import PropTypes from 'prop-types';
import ClientProfile from "../ClientProfile/clientprofile";

const ListItem = ({ client, id }) => {
  var SelectedClient =  client;
  var key =  id;
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join(".");
  return (
    <div className="ClientsMiniProfile" onClick={() => ClientProfile( SelectedClient, key )} >
      <div className="MiniProfile">
        {shortName(client.general.firstName, client.general.lastName)}
      </div>
      <div className="Content">
        <div className="Header">
          <div>Имя: {client.general.firstName}</div>
          <div>Фамилия: {client.general.lastName}</div>
          <span> </span>
          <div>Компания: {client.job.company}</div>
          <div className="job"> Должность: {client.job.title}</div>
          <span> </span>
          <div>
            Адресс: {client.address.country}, {client.address.city},{" "}
            {client.address.street}
            {console.log(id, client.general.firstName)}
          </div>
        </div>
      </div>
    </div>
  );
};


ListItem.propTypes = {
  client: PropTypes.object,
};

export default ListItem;
