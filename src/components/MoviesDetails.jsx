import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviesDetails = ({ movie }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieObj = movie.Search.find((movie) => movie.imbdID === movie.imdbID);
  }, []);

  return (
    <Container fluid>
      <h3 className="mb-4 mx-5 mt-5">Movie Details</h3>
      <Row xs={1} md={3} xl={6} className="mx-4">
        {moviePotter.map((movie) => (
          <Col key={movie.imdbID}>
            <Card className="border-0">
              <Card.Img variant="top" src={movie.Poster} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default MoviesDetails;
