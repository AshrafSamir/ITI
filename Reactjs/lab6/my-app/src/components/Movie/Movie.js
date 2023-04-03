import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions/moviesActions";

function Movie({
  id,
  backdrop_path,
  title,
  overview,
  popularity,
  release_date,
  vote_average,
  vote_count,
}) {
  const navigate = useNavigate();
  // const { setMovies } = useContext(MoviesContext);
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/movie/details/${id}`, {
      state: {
        popularity,
        release_date,
        title,
        vote_average,
        vote_count,
        overview,
      },
    });
  };
  const handleDelete = () => {
    fetch(`http://localhost:3004/movies/${id}`, {
      method: "DELETE",
    })
      .then(dispatch(deleteMovie(id)))
      .catch((err) => console.log(err));
  };

  return (
    <Card className="m-3" style={{ width: "18rem" }}>
      <Card.Img
        className="mt-2"
        variant="top"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
        <Button onClick={handleClick} variant="primary">
          Details
        </Button>
        <Button className="m-2" onClick={handleDelete} variant="danger">
          Delete
        </Button>
        {/* <Link to={`/movie/details/${id}`}>
          <Button variant="primary">Details</Button>
        </Link> */}
      </Card.Body>
    </Card>
  );
}

export default Movie;
