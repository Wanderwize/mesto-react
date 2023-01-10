function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card">
      <button type="button" className="card__trash"></button>
      <img
        className="card__image"
        src={props.card.link}
        onClick={handleCardClick}
        alt={`${props.card.name}`}
      />
      <div className="card__name">
        <h2 className="card__name-title">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className="card__like card__like_active"
          ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
