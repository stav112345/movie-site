import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, year, duration, genre, rating, poster, available }) {
  const [userRating, setUserRating] = useState(0);

  function handleStarClick(starNum) {
    if (userRating === starNum) {
      setUserRating(0);
    } else {
      setUserRating(starNum);
    }
  }

  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        <img src={poster} alt={title} />
        {available && <span className="movie-card__badge">זמין לצפייה</span>}
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">
          {year} · {duration} דק׳
        </p>

        <div className="movie-card__footer">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__rating">★ {rating}</span>
        </div>

        <div className="movie-card__user-rating">
          <span>זה היה ממש קשה </span>
          {[1, 2, 3, 4, 5].map((starNum) => (
            <span key={starNum} onClick={() => handleStarClick(starNum)}>
              {userRating >= starNum ? "★" : "☆"}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default MovieCard;