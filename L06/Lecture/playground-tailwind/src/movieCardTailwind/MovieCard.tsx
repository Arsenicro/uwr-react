import alice from "../images/Alice.webp";

function MovieCard() {
  return (
    <div className="movie-card">
      <img
        className="movie-card-image"
        src={alice}
        alt="Alice in Wonderland"
      />
      <div className="movie-card-body">
        <h2 className="movie-card-title">Alice in Wonderland</h2>
        <p className="movie-card-description">
          Nineteen-year-old Alice returns to the magical world from her
          childhood adventure, where she reunites with her old friends and
          learns of her true destiny: to end the Red Queen's reign of terror.
        </p>
        <div className="movie-card-tags">
          <span className="tag tag-fantasy">Fantasy</span>
          <span className="tag tag-adventure">Adventure</span>
          <span className="tag tag-family">Family</span>
          <span className="tag tag-musical">Musical</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard; 