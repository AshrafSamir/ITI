import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MoviesContext } from "../../../contexts/MovieContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

function AddMovie() {
  const navigate = useNavigate();
  const { movies, setMovies } = useContext(MoviesContext);
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
    console.log(data);
    fetch("http://localhost:3004/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies([...movies, data]);
        navigate("/movie", {
          state: data,
        });
      })
      .catch((err) => console.log(err));
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
