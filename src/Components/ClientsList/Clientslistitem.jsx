import React from "react";
import PropTypes from 'prop-types';
//import ClientProfile from "../ClientProfile/clientprofile";
import App from '../../App.js';
import { connect } from "react-redux";
import ClientProfileA from "../../actions/clientPropfileA";
import ClientProfile from "../ClientProfile/clientprofile.jsx";
import { Link } from 'react-router-dom';
import ClientList from "./clientslist.jsx";
import { bindActionCreators } from "redux";


const ListItem = ( {client, id }) => {
  var SelectedClient =  client;
  var key =  id;
  const shortName = (firstName, lastName) =>
    [firstName, lastName]
      .filter(Boolean)
      .map((item) => item[0])
      .join(".");
  return (
    <Link to={"/client/"+id} onClick={(dispatch) => ClientProfileA(id) }>
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
    </Link>
  );
};

export function matchDispatchToProps (dispatch)
{
  return bindActionCreators({ClientProfileA: ClientProfileA}, dispatch)
}

ListItem.propTypes = {
  client: PropTypes.object,
};
export default ListItem; connect(matchDispatchToProps);
