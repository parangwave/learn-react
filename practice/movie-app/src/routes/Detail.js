import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const {movie, setMovie} = useState();
  // console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json);
    // console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <div>{movie.name}</div>;
}
