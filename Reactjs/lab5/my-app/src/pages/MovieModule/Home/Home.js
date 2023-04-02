import React, { useContext } from "react";
import Movie from "../../../components/Movie/Movie";
import { MoviesContext } from "../../../contexts/MovieContext";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const { movies, setMovies } = useContext(MoviesContext);

  const moviesElements = movies?.map((movie) => (
    <Movie className="col-4" key={movie.id} setMovies={setMovies} {...movie} />
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
