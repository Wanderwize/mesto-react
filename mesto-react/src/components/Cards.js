function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.obj);
  }

  return (
    <div className="card">
      <button type="button" className="card__trash"></button>
      <img
        className="card__image"
        src={props.obj.link}
        onClick={handleCardClick}
        alt=""
      />
      <div className="card__name">
        <h2 className="card__name-title">{props.obj.name}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className="card__like card__like_active"
          ></button>
          <p className="card__like-counter">{props.obj.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
