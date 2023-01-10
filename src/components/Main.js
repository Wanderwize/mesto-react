import React, { useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [card, setCard] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [userData, cardsData] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCard(cardsData);
        // console.log(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            style={{ backgroundImage: `url(${userAvatar})` }}
            id="avatar"
            className={"profile__avatar-image"}
          />
          <button
            onClick={props.onEditAvatar}
            className="profile__avatar-button"
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__info-title" id="name">
            {userName}
          </h1>
          <h2 className="profile__info-subtitle" id="about">
            {userDescription}
          </h2>
          <button
            onClick={props.onEditProfile}
            type="button"
            className="profile__edit-btn"
          ></button>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-btn"
        ></button>
      </section>
      <section className="elements" id="elements">
        {card.map((card, id) => (
          <Card card={card} onCardClick={props.onCardClick} key={id} />
        ))}
      </section>
    </div>
  );
}

export default Main;
