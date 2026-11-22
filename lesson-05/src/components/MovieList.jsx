import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

function MovieList({ title, movies }) {
  return (
    <section className="movie-list">
      <h2>{title}</h2>
      {movies.length === 0 ? (
        <p className="movie-list__empty">לא נמצאו סרטים התואמים לחיפוש.</p>
      ) : (
        <div className="movie-list__grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieList;