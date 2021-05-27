import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
   return (
      <>
         {recommendations &&
            recommendations.slice(0, 8).map((recommendation) => (
               <ListGroup.Item key={recommendation.id}>
                  <Link to={`/movie/${recommendation.id}`}>
                     {recommendation.poster_path != null ? (
                        <Card.Img
                           variant="top"
                           height="250px"
                           src={`${process.env.REACT_APP_IMAGE_URL}/${recommendation.poster_path}`}
                           alt={recommendation.title}
                        />
                     ) : (
                        <Card.Img
                           variant="bottom"
                           height="250px"
                           src="https://via.placeholder.com/250x330"
                           alt={recommendation.title}
                        />
                     )}
                  </Link>
                  <Card.Body as="div">
                     <Card.Subtitle>{recommendation.title}</Card.Subtitle>
                  </Card.Body>
               </ListGroup.Item>
            ))}
      </>
   );
};

export default Recommendations;
