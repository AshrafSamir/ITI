import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <Card>
      {movie && (
        <>
          <Card.Header>{id}</Card.Header>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>{movie.popularity}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Card.Text>{movie.vote_average}</Card.Text>
            <Card.Text>{movie.vote_count}</Card.Text>

            <Link to="/movie">
              <Button variant="primary">Go somewhere</Button>
            </Link>
          </Card.Body>
        </>
      )}
    </Card>
  );
}
