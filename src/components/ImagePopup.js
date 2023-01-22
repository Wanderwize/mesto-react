function ImagePopup({ card, onClose }) {
  return (
    <div>
      <section
        className={`popup image-popup ${card ? "popup_opened" : ""}`}
        id="image-popup"
      >
        <div className="image-popup__container">
          <button
            onClick={onClose}
            type="button"
            className="popup__close image-popup__close"
          ></button>
          <img
            src={`${card ? card.link : ""}`}
            className="image-popup__window"
            alt={`${card ? card.name : ""}`}
          />
          <h2 className="image-popup__subtitle">{`${
            card ? card.name : ""
          }`}</h2>
        </div>
      </section>
    </div>
  );
}

export default ImagePopup;
