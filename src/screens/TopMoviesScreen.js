import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { topRatedMovie } from "./../actions/movieActions";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import Movie from "./../components/Movie";

const TopMoviesScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const topRatedMovies = useSelector((state) => state.topRatedMovies);
   var { loading, error, tmovies, page, total_pages } = topRatedMovies;
   useEffect(() => {
      dispatch(topRatedMovie(paginate));
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
               <h1>Top Rated Movies</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {tmovies.map((movie) => (
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

export default TopMoviesScreen;
