import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieList = ({ movie }) => {
   return (
      <Row>
         <Col md={2}>{movie.release_date}</Col>
         <Col md={10}>
            <Link to={`/movie/${movie.id}`}>{movie.original_title}</Link>
         </Col>
      </Row>
   );
};

export default MovieList;
