import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const [moviePotter, setMoviePotter] = useState([]);

  const handleMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=28a9b9e8&s=Harry Potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("FILM NON TROVATI");
        }
      })
      .then((movie) => {
        if (movie.Search) {
          setMoviePotter(movie.Search.slice(0, 6));
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const handleSubmit = (id) => {
    console.log("id trovato", id);
    navigate(`/TvShows/MoviesDetails/${id}`);
  };

  useEffect(() => {
    handleMovies();
  }, []);

  return (
    <Container fluid>
      <h3 className="mb-4 mx-5 mt-5">Saga : Harry Potter</h3>
      <Row xs={1} md={3} xl={6} className="mx-4">
        {moviePotter.map((movie) => (
          <Col
            key={movie.imdbID}
            className="mb-4 text-center px-1"
            onClick={() => handleSubmit(movie.imdbID)} // Solo la funzione handleSubmit
          >
            <Card className="border-0">
              <Card.Img variant="top" src={movie.Poster} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
