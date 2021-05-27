import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

const Review = ({ reviews }) => {
   return (
      <ListGroup>
         {reviews &&
            reviews.map((review) => (
               <ListGroup.Item key={review.id}>
                  <Row>
                     <Col md={2}>{review.author}</Col>
                     <Col md={10}>{review.content}</Col>
                  </Row>
               </ListGroup.Item>
            ))}
      </ListGroup>
   );
};

export default Review;
