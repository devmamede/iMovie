import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./MovieCard.css";
const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
  }).isRequired,
  showLink: PropTypes.bool,
};

export default MovieCard;
