import React, { useState } from "react";
import api from "../utils/api";
import Cards from "./Cards";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialData()
      .then((data) => {
        const [userData, cardsData] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
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
            alt=""
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
            {userName}
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
        {cards.map((obj) => (
          <Cards obj={obj} onCardClick={props.onCardClick} />
        ))}
      </section>
    </div>
  );
}

export default Main;
