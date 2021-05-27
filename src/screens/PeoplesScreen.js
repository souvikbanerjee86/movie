import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import People from "./../components/People";
import { allPeoples } from "./../actions/peopleActions";
import { PEOPLE_RESET } from "../constants/peopleConstant";

const PeoplesScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const peoples = useSelector((state) => state.peoples);
   var { loading, error, stars, page, total_pages } = peoples;

   const next = () => {
      if (page < total_pages) {
         setPaginate(page + 1);
      }
   };
   const prev = () => {
      if (page < total_pages) {
         setPaginate(page - 1);
      }
   };
   useEffect(() => {
      if (paginate === 1) {
         dispatch({ type: PEOPLE_RESET });
      }
      dispatch(allPeoples(paginate));
   }, [dispatch, paginate]);

   return (
      <>
         <Row>
            <Col sm={4}>
               <div className="d-flex"></div>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4}>
               <div className="d-flex flex-row-reverse">
                  <Button onClick={next}>Next{" >"}</Button>
                  &nbsp;
                  {paginate > 1 && <Button onClick={prev}>{"< "}Prev</Button>}
               </div>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
               <h1>Popular People</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {stars.map((people) => (
                        <Col key={people.id} sm={12} md={6} lg={4} xl={2}>
                           <CardDeck>
                              <People people={people} />
                           </CardDeck>
                        </Col>
                     ))}
                  </Row>
               )}
            </Col>
         </Row>
      </>
   );
};

export default PeoplesScreen;
