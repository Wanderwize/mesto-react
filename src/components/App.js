import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import EditProfilePopup from "../components/EditProfilePopup.js";
import EditAvatarPopup from "../components/EditAvatarPopup.js";
import React from "react";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);

  const [currentUser, setCurrentUser] = React.useState('');

  const [avatar, setAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddPlaceSubmit(data) {
    api
      .pushNewCard(data)
      .then((data) => {
        const newCard = data;
        setCards([newCard, ...cards]);

        console.log(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(data) {
    api
      .pushUserInfo(data)
      .then((data) => {
        setCurrentUser(data);
        setAvatar(data);
        console.log(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setAvatar(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((data) => {
        setAvatar(data);
        console.log(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardClick(cards) {
    setSelectedCard(cards);
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;

    api
      .deleteCard(card._id)
      .then(() => {
        const newCard = cards.filter((elem) => elem !== card);
        setCards(newCard);
      })
      .catch(console.error);
    console.log("Delete!");
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.error);
    console.log("like!");
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
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentUserContext.Provider value={avatar}>
        <div className="page">
          <Header />

          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
          />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddPlaceSubmit}
          />

          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
