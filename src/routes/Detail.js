import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const movieDetailFetch = async () => {
      const movieDetail = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
        )
      ).json();
      console.log(movieDetail);
      setLoading((loading) => false);
      setMovie((movie) => movieDetail.data.movie);
    };
    movieDetailFetch();
  }, []);
  return (
    <div>
      <h1>{loading}</h1>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default Detail;
