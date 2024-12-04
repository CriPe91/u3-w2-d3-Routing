import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MoviesDetails = () => {
  const { id } = useParams(); // Recupera l'ID dal parametro della URL
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // Usa le backticks per la stringa template e sostituisci ${id} correttamente
    fetch(`https://www.omdbapi.com/?apikey=28a9b9e8&i=${id}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((filmObj) => {
        console.log(filmObj); // Aggiungi questo per vedere cosa ricevi dall'API
        if (filmObj.Response === "True") {
          setFilm(filmObj); // Imposta il film se la risposta è valida
        } else {
          throw new Error(filmObj.Error); // Gestisce eventuali errori nella risposta
        }
      })
      .catch((err) => {
        console.log(err);
        setFilm(null); // Se c'è un errore, resetta il film
      });
  }, [id]); // La fetch dipende dall'ID, quindi la eseguiamo ogni volta che l'ID cambia

  if (!film) {
    return <p>Caricamento...</p>; // Mostra un messaggio se il film non è disponibile
  }

  // Quando il film è stato caricato correttamente
  return (
    <Container className="my-5">
      <Row>
        <Col md={4} className="mx-auto">
          <Card className="border-0">
            <Card.Img variant="top" src={film.Poster} alt={film.Title} />
            <Card.Body className="text-bg-dark">
              <Card.Title>{film.Title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{film.Year}</Card.Subtitle>
              <Card.Text>
                <strong>Plot:</strong> {film.Plot}
              </Card.Text>
              <Card.Text>
                <strong>Cast:</strong> {film.Actors}
              </Card.Text>
              <Card.Text>
                <strong>Director:</strong> {film.Director}
              </Card.Text>
              <Card.Text>
                <strong>Genre:</strong> {film.Genre}
              </Card.Text>
              <Card.Text>
                <strong>Released:</strong> {film.Released}
              </Card.Text>
              <Card.Text>
                <strong>Runtime:</strong> {film.Runtime}
              </Card.Text>
              <Card.Text>
                <strong>IMDb Rating:</strong> {film.imdbRating}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviesDetails;
