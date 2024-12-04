import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const GalleryOne = () => {
  // state = {
  //   movieBatman: [],
  // };

  const [movieBatman, setMovieBatman] = useState([]);

  const handleMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=28a9b9e8&s=Batman")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("FILM NON TROVATI");
        }
      })

      .then((movie) => {
        console.log(movie);

        if (movie.Search) {
          setMovieBatman(movie.Search.slice(0, 6));
        }
      })
      .catch((error) => {
        "ERROR", console.log(error);
      });
  };

  useEffect(() => {
    handleMovies();
  }, []);

  return (
    <Container fluid>
      <h3 className="mb-4 mx-5 mt-4">Saga : Batman</h3>
      <Row xs={1} md={3} xl={6} className="mx-4">
        {movieBatman.map((movie) => (
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

export default GalleryOne;
