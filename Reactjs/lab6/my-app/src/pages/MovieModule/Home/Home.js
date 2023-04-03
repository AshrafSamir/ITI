import React from "react";
import Movie from "../../../components/Movie/Movie";

import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  // const { movies, setMovies } = useContext(MoviesContext);

  const { movies } = useSelector((state) => state.movies);

  const moviesElements = movies?.map((movie) => (
    <Movie className="col-4" key={movie.id} {...movie} />
  ));
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginRight: "10px",
              }}
              to={"add"}
            >
              Add
            </Link>
          </Nav>
        </Container>
      </Navbar>
      {moviesElements}
    </>
  );
}
