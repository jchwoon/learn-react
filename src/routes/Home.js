import Movie from "../components/Movie";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);
  const movieFetch = async () => {
    const movie = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&genre=action&sort_by=year"
      )
    ).json();
    setLoading((loading) => false);
    setMovieArr((movieArr) => movie.data.movies);
  };
  useEffect(() => {
    movieFetch();
  }, []);
  console.log(movieArr);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {movieArr.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              medium_cover_image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
              id={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
