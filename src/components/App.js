import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import React, { useState } from "react";
import ImagePopup from "./ImagePopup.js";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    console.log("Avatar!");
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    console.log("Profile!");
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    console.log("Place!");
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
        name={"avatar"}
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <input
            id="title"
            className="popup__input popup__input_name_value popup__input_place_value"
            type="text"
            name="name"
            placeholder="Ссылка"
            required
            minLength="2"
            maxLength="30"
          ></input>
        }
      />

      <PopupWithForm
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen}
        name={"add-card"}
        title="Новое место"
        children={
          <div>
            <input
              id="title"
              className="popup__input popup__input_name_value popup__input_place_value"
              type="text"
              name="name"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            ></input>
            <input
              id="title"
              className="popup__input popup__input_name_value popup__input_place_value"
              type="text"
              name="name"
              placeholder="Ссылка"
              required
              minLength="2"
              maxLength="30"
            ></input>
          </div>
        }
      />

      <PopupWithForm
        onClose={closeAllPopups}
        name={"profile"}
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        children={
          <div>
            <input
              id="username"
              className="popup__input popup__input_name_value"
              placeholder="Имя"
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="40"
            ></input>
            <input
              id="userabout"
              className="popup__input popup__input_about_value"
              placeholder="Род деятельности"
              type="text"
              name="about"
              required
              minLength="2"
              maxLength="200"
            ></input>
          </div>
        }
      />

      <Footer />
    </div>
  );
}

export default App;
