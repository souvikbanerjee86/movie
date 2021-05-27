import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvList = ({ tv }) => {
   return (
      <Row>
         <Col md={2}>{tv.first_air_date}</Col>
         <Col md={10}>
            <Link to={`/tvshow/${tv.id}`}>{tv.original_name}</Link>
         </Col>
      </Row>
   );
};

export default TvList;
