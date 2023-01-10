function PopupWithForm(props) {
  return (
    <div>
      <div
        className={`popup popup_${props.name} ${
          props.isOpen && "popup_opened"
        }`}
      >
        <div className="popup__container popup__container-edit">
          <button
            onClick={props.onClose}
            type="button"
            className="popup__close popup__close-edit"
          ></button>

          <h2 className="popup__title">{props.title}</h2>

          <form
            className="popup__form popup__form-user"
            name={props.name}
            id="form_user"
            noValidate
          >
            <div>{props.children}</div>
            <button
              className="popup__save-btn popup__save-btn_unactive popup__save-button"
              type="submit"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <div className="popup popup_avatar popup_opened">
        <div className="popup__container popup__container-edit">
          <button
            type="button"
            className="popup__close popup__close-edit"
          ></button>

          <h2 className="popup__title">Hf,jnftn</h2>

          <form
            className="popup__form popup__form-user"
            name="name"
            id="form_user"
            novalidate
          >
            <div></div>
            <button
              className="popup__save-btn popup__save-btn_unactive popup__save-button"
              type="submit"
              disabled
            >
              Сохранить
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
}

export default PopupWithForm;
