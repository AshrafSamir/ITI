import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const {
    popularity,
    release_date,
    title,
    vote_average,
    vote_count,
    overview,
  } = state;
  return (
    <Card>
      <Card.Header>{id}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
        <Card.Text>{popularity}</Card.Text>
        <Card.Text>{release_date}</Card.Text>
        <Card.Text>{vote_average}</Card.Text>
        <Card.Text>{vote_count}</Card.Text>

        <Link to="/movie">
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
