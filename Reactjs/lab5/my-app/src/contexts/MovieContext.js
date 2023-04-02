import React, { useState, useEffect, createContext } from "react";

export const MoviesContext = createContext();
export function MovieContext({ children }) {
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
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}
