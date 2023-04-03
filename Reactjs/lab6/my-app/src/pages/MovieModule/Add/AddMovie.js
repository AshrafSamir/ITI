import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addMovie } from "../../../redux/actions/moviesActions";

function AddMovie() {
  // const { movies, setMovies } = useContext(MoviesContext);
  const dispatch = useDispatch();
  // const { movies } = useSelector((state) => state.movies);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.formBasicTitle.value;
    const overview = e.target.elements.formBasicOverView.value;
    const data = {
      title,
      overview,
      backdrop_path: "/qmEKe0AEsns2WXinbkGxlCxlTHq.jpg",
      popularity: 0,
      release_date: new Date(Date.now()),
      vote_average: 0,
      vote_count: 0,
    };

    dispatch(addMovie(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicOverView">
        <Form.Label>OverView</Form.Label>
        <Form.Control type="text" placeholder="Enter overview" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddMovie;
