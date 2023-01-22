import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup(props, { isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState("");
  const avatarRef = React.useRef();

  function handleChangeAvatar(evt) {
    evt.preventDefault();
    setAvatar(avatarRef.current.value);
  }

  function handleSubmitAvatarForm(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm
      onSubmit={handleSubmitAvatarForm}
      name={"avatar"}
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      children={
        <input
          value={avatar}
          // onClick={handleSubmit}
          onChange={handleChangeAvatar}
          id="title"
          ref={avatarRef}
          className="popup__input popup__input_name_value popup__input_place_value"
          type="url"
          name="avatar"
          placeholder="Ссылка"
          required
        ></input>
      }
    />
  );
}

export default EditAvatarPopup;
