import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://image.tmdb.org/t/p/original/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>Movies Website</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default About;
