import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import React, { useState } from "react";
import ImagePopup from "./ImagePopup.js";
function App() {
  const [EditProfile, isEditProfilePopupOpen] = React.useState(false);
  const [AddPlace, isAddPlacePopupOpen] = React.useState(false);
  const [EditAvatar, isEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    isEditAvatarPopupOpen(!EditAvatar);
    console.log("Avatar!");
  };

  const handleEditProfileClick = () => {
    isEditProfilePopupOpen(!EditProfile);
    console.log("Profile!");
  };

  const handleAddPlaceClick = () => {
    isAddPlacePopupOpen(!AddPlace);
    console.log("Place!");
  };

  const closeAllPopups = () => {
    isEditAvatarPopupOpen(false);
    isEditProfilePopupOpen(false);
    isAddPlacePopupOpen(false);
    setSelectedCard("");
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

      {EditAvatar && (
        <PopupWithForm
          name={"avatar"}
          title={"Обновить аватар"}
          isOpen={"opened"}
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
      )}
      {AddPlace && (
        <PopupWithForm
          onClose={closeAllPopups}
          name={"add-card"}
          title={"Новое место"}
          isOpen={"opened"}
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
      )}
      {EditProfile && (
        <PopupWithForm
          onClose={closeAllPopups}
          name={"profile"}
          title={"Редактировать профиль"}
          isOpen={"opened"}
          children={
            <div>
              <input
                id="username"
                class="popup__input popup__input_name_value"
                placeholder="Имя"
                type="text"
                name="name"
                required
                minlength="2"
                maxlength="40"
              ></input>
              <input
                id="userabout"
                class="popup__input popup__input_about_value"
                placeholder="Род деятельности"
                type="text"
                name="about"
                required
                minlength="2"
                maxlength="200"
              ></input>
            </div>
          }
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
