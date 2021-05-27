import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const TvShow = ({ tvShow }) => {
   return (
      <>
         {tvShow && (
            <Card className="my-3 p-3 rounded">
               <Link to={`/tvshow/${tvShow.id}`}>
                  {tvShow.poster_path != null ? (
                     <Card.Img
                        variant="top"
                        height="320px"
                        src={`${process.env.REACT_APP_IMAGE_URL}/${tvShow.poster_path}`}
                        alt={tvShow.name}
                     />
                  ) : (
                     <Card.Img
                        variant="top"
                        height="320px"
                        src="https://via.placeholder.com/250x350"
                        alt={tvShow.name}
                     />
                  )}
                  {tvShow.vote_average >= 7 && (
                     <Badge pill variant="success">
                        {tvShow.vote_average}/10
                     </Badge>
                  )}
                  {tvShow.vote_average <= 4 && (
                     <Badge pill variant="danger">
                        {tvShow.vote_average}/10
                     </Badge>
                  )}
                  {tvShow.vote_average > 4 && tvShow.vote_average < 7 && (
                     <Badge pill variant="warning">
                        {tvShow.vote_average}/10
                     </Badge>
                  )}
               </Link>

               <Card.Body>
                  <Card.Title as="div">
                     <strong>{tvShow.name}</strong>
                  </Card.Title>
                  <Card.Text as="div">
                     Overview: {tvShow.overview.slice(0, 100).concat("...")}
                  </Card.Text>
               </Card.Body>
            </Card>
         )}
      </>
   );
};

export default TvShow;
