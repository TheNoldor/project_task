import React from "react";
import PropTypes from "prop-types";
import ClientProfile from "../ClientProfile";

const ListItem = ({ client }) => {
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join(".");
  return (
    <div className="ClientsMiniProfile" onClick={() => ClientProfile()}>
      <div className="Content">
        <div className="Header">
          <img
            alt={shortName(client.general.firstName, client.general.lastName)}
            src={client.general.avatar}
          />
          <div className="Name">
            {client.general.firstName} {client.general.lastName}
          </div>
        </div>
        <span> </span>
        <div>Компания: {client.job.company}</div>
        <div className="job"> Должность: {client.job.title}</div>
        <span> </span>
        <div>
          Адресс: {client.address.country}, {client.address.city},{" "}
          {client.address.street}
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  client: PropTypes.object,
};

export default ListItem;
