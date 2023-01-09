function ImagePopup(props) {
  return (
    <div>
      <section
        className={`popup image-popup ${props.card && "popup_opened"}`}
        id="image-popup"
      >
        <div className="image-popup__container">
          <button
            onClick={props.onClose}
            type="button"
            className="popup__close image-popup__close"
          ></button>
          <img
            src={`${props.card.link}`}
            className="image-popup__window"
            alt=""
          />
          <h2 className="image-popup__subtitle">{props.card.name}</h2>
        </div>
      </section>
    </div>
  );
}

export default ImagePopup;
