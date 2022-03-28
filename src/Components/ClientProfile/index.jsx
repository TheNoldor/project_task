import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import clients from "../clients.json";
//import styles from "./styles.module.scss";

//const DEFAULT_AVATAR = "https://semantic-ui.com/images/avatar2/small/elyse.png";

const ClientProfile = () => {
  const { id } = useParams();
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(clients.find((item) => item.id === id));
    console.log("effect");
  }, [id]);

  if (!client) {
    return <div>loading</div>;
  }

  const { firstName, lastName, avatar } = client.general;
  const { title, company } = client.job;
  const { phone, email } = client.contact;
  const { country, city, street, zipCode } = client.address;

  const contactInformation = [country, city, street, zipCode].join(", ");

  return (
    <div className="Profile">
      <div className="ClientProfile">
        <div className="header">
          <img alt="" src={avatar} />
          <div className="general">
            <div className="title">
              <h3>О сотруднике</h3>
              <h5>Имя: {firstName}</h5>
              <h5>Фамилия: {lastName}</h5>
            </div>
            <div className="subtitle">
              Компания: {company} Должность: {title}
            </div>
          </div>
        </div>
        <h3>Контакты</h3>
        <div className="secondary">
          <div>
            <div>
              <div name="envelope" size="large" verticalAlign="middle" />
              <div verticalAlign="middle">Электронная почта: {email}</div>
            </div>
            <div>
              <div name="phone" size="large" verticalAlign="middle" />
              <div verticalAlign="middle">Номер: {phone}</div>
            </div>
            <div floated="left">
              <div
                name="map marker alternate"
                size="large"
                verticalAlign="middle"
              />
              <div verticalAlign="middle">Адресс: {contactInformation}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
