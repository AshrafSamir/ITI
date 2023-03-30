import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";

export default function Home() {
  const [movies, serMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/movies")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // serMovies(data.results);
        serMovies(data);
      });
  }, []);

  const moviesElements = movies?.map((movie) => (
    <Movie className="col-4" key={movie.id} setMovies={serMovies} {...movie} />
  ));
  return (
    <div className="container">
      <div className="row">{moviesElements}</div>
    </div>
  );
}
