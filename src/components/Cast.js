import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cast = ({ casts }) => {
   return (
      <>
         {casts &&
            casts.slice(0, 8).map((cast) => (
               <ListGroup.Item key={cast.id}>
                  <Link to={`/people/${cast.id}`}>
                     {cast.profile_path != null ? (
                        <Card.Img
                           variant="top"
                           height="250px"
                           src={`${process.env.REACT_APP_IMAGE_URL}/${cast.profile_path}`}
                           alt={cast.name}
                        />
                     ) : (
                        <Card.Img
                           variant="top"
                           height="250px"
                           src="https://via.placeholder.com/250x330"
                           alt={cast.name}
                        />
                     )}
                  </Link>

                  <Card.Body as="div">
                     <Card.Subtitle>{cast.name}</Card.Subtitle>
                  </Card.Body>
               </ListGroup.Item>
            ))}
      </>
   );
};

export default Cast;
