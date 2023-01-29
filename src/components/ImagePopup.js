function ImagePopup({ card, onClose }) {
  return (
    <div>
      <section
        className={`popup ${card ? "popup_opened" : ""}`}
        id="image-popup"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      >
        <div className="popup-image__container">
          <button
            onClick={onClose}
            type="button"
            className="popup__close popup-image__close"
          ></button>
          <img
            src={`${card ? card.link : ""}`}
            className="popup-image__window"
            alt={`${card ? card.name : ""}`}
          />
          <h2 className="popup-image__subtitle">{`${
            card ? card.name : ""
          }`}</h2>
        </div>
      </section>
    </div>
  );
}

export default ImagePopup;
