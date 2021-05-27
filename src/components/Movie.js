import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
   //backdrop_path
   return (
      <>
         {movie && (
            <Card className="my-3 p-3 rounded">
               <Link to={`/movie/${movie.id}`}>
                  {movie.poster_path != null ? (
                     <Card.Img
                        variant="top"
                        height="320px"
                        src={`${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`}
                        alt={movie.title}
                     />
                  ) : (
                     <Card.Img
                        variant="top"
                        height="320px"
                        src="https://via.placeholder.com/250x350"
                        alt={movie.title}
                     />
                  )}
                  {movie.vote_average >= 7 && (
                     <Badge pill variant="success">
                        {movie.vote_average}/10
                     </Badge>
                  )}
                  {movie.vote_average <= 4 && (
                     <Badge pill variant="danger">
                        {movie.vote_average}/10
                     </Badge>
                  )}
                  {movie.vote_average > 4 && movie.vote_average < 7 && (
                     <Badge pill variant="warning">
                        {movie.vote_average}/10
                     </Badge>
                  )}
               </Link>
               <Card.Body>
                  <Card.Title as="div">
                     <strong>{movie.title}</strong>
                  </Card.Title>
                  <Card.Text as="div"> </Card.Text>
                  <Card.Text as="div">
                     Overview: {movie.overview.slice(0, 100).concat("...")}
                  </Card.Text>
               </Card.Body>
            </Card>
         )}
      </>
   );
};

export default Movie;
