import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const Movie = ({ id, title, medium_cover_image, summary, genres }) => {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={medium_cover_image} alt={title} />
      <div className={styles.movie__detail}>
        <h3 className={styles.movie__title}>
          <Link to={`movie/${id}`}>{title}</Link>
        </h3>
        <p>{summary.length > 300 ? `${summary.slice(0, 300)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : ""}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
