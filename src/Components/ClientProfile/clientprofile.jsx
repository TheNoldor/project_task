import React, {Component} from "react";
import { PropTypes } from "prop-types";
import clients from "../clients.json";
import { connect } from "react-redux";
const DEFAULT_AVATAR = "https://semantic-ui.com/images/avatar2/small/elyse.png";

function ClientProfile(GetClient){
    console.log(GetClient);
  if ((GetClient === 'undefined') || (GetClient  === {})) return (<div className="Profile"> Имя</div>)
  else console.log(); return (<div className="Profile"> <img className='avatar' alt='' src={DEFAULT_AVATAR} />
    {
      clients.map((client, index) =>
      {
        if(index === GetClient) return (
          <div className="ClientProfile">
          <div className='header'>
            <img className='avatar' alt='' src={DEFAULT_AVATAR} />
            <div className='general'>
              <div className='title'>
                {client.general.firstName} {client.general.lastName}
              </div>
              <div className='subtitle'>
                {client.job.company} - {client.job.title}
              </div>
            </div>
          </div>
          <h3>Contacts</h3>
          <div className='secondary'>
            <div List>
              <div ListItem1>
                <div ListIcon name="envelope" size="large" verticalAlign="middle" />
                <div ListContent verticalAlign="middle">
                  {client.contact.email}
                </div>
              </div>
              <div ListItem1>
                <div ListIcon name="phone" size="large" verticalAlign="middle" />
                <div ListContent verticalAlign="middle">
                  {client.contact.phone}
                </div>
              </div>
              <div ListItem1 floated="left">
                <div ListIcon
                  name="map marker alternate"
                  size="large"
                  verticalAlign="middle"
                />
                <div ListContent verticalAlign="middle">
                  {[
                    client.address.country,
                    client.address.city,
                    client.address.street,
                    client.address.zipCode,
                  ].join(", ")}
                </div>
              </div>
            </div>
          </div>
      </div>
         )
         else return (<div className="Profile"> - </div>);
    }
    )
    }
      </div>)

}

export default ClientProfile;
