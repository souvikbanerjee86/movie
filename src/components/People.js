import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const People = ({ people }) => {
   //backdrop_path
   return (
      <>
         {people && (
            <Card className="my-3 p-3 rounded">
               <Link to={`/people/${people.id}`}>
                  {people.profile_path != null ? (
                     <Card.Img
                        variant="top"
                        src={`${process.env.REACT_APP_IMAGE_URL}/${people.profile_path}`}
                        alt={people.name}
                     />
                  ) : (
                     <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/250x350"
                        alt={people.name}
                     />
                  )}
               </Link>
               <Card.Body>
                  <Card.Title as="div">
                     <strong>{people.name}</strong>
                  </Card.Title>
               </Card.Body>
            </Card>
         )}
      </>
   );
};

export default People;
