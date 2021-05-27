import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { upcommingMovie } from "./../actions/movieActions";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import Movie from "./../components/Movie";

const UpcommingMoviesScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const upcommingMovies = useSelector((state) => state.upcommingMovies);
   var { loading, error, cmovies, page, total_pages } = upcommingMovies;
   useEffect(() => {
      dispatch(upcommingMovie(paginate));
   }, [dispatch, paginate]);

   const next = () => {
      if (page < total_pages) {
         setPaginate(page + 1);
      }
   };
   const prev = () => {
      if (page <= total_pages) {
         setPaginate(page - 1);
      }
   };

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
               <h1>Up Comming Movies</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {cmovies.map((movie) => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={2}>
                           <CardDeck>
                              <Movie movie={movie} />
                           </CardDeck>
                        </Col>
                     ))}
                     <Movie />
                  </Row>
               )}
            </Col>
         </Row>
      </>
   );
};

export default UpcommingMoviesScreen;
