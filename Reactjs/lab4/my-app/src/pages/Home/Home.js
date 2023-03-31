import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setMovies(data.results);
        setMovies(data);
      });
  }, []);

  const moviesElements = movies?.map((movie) => (
    <Movie className="col-4" key={movie.id} setMovies={setMovies} {...movie} />
  ));
  return <>{moviesElements}</>;
}
