import React, { useEffect, useState } from "react";
import { Button, CardDeck, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { discoverMovie } from "./../actions/movieActions";
import Loader from "./../components/Loader";
import Message from "./../components/Message";
import Movie from "./../components/Movie";

const MoviesScreen = () => {
   const dispatch = useDispatch();
   const [paginate, setPaginate] = useState(1);
   const [sort, setSort] = useState("popularity.desc");

   const discoverMovies = useSelector((state) => state.discoverMovies);
   const { loading, error, dmovies, page, total_pages } = discoverMovies;

   useEffect(() => {
      dispatch(discoverMovie(paginate, sort));
   }, [dispatch, sort, paginate]);

   const searchHandler = (e) => {
      e.preventDefault();
      dispatch(discoverMovie(paginate, sort));
   };

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
            <Row>
               <Col md={3}>
                  <h1>Search Details</h1>
                  <ListGroup>
                     <ListGroup.Item>
                        <Form onSubmit={searchHandler}>
                           <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Label>Sort Results By</Form.Label>
                              <Form.Control
                                 as="select"
                                 onChange={(e) => setSort(e.target.value)}
                              >
                                 <option value="popularity.desc">
                                    Popularity Descending
                                 </option>
                                 <option value="popularity.asc">
                                    Popularity Ascending
                                 </option>
                                 <option value="release_date.asc">
                                    Release Date Ascending
                                 </option>
                                 <option value="release_date.desc">
                                    Release Date Descending
                                 </option>
                                 <option value="revenue.asc">
                                    Revenue Ascending
                                 </option>
                                 <option value="revenue.desc">
                                    Revenue Descending
                                 </option>
                                 <option value="primary_release_date.asc">
                                    Primary Release Date Ascending
                                 </option>
                                 <option value="primary_release_date.desc">
                                    Primary Release Date Descending
                                 </option>
                                 <option value="vote_average.desc">
                                    Vote Average Descending
                                 </option>
                                 <option value="vote_average.asc">
                                    Vote Average Ascending
                                 </option>
                              </Form.Control>
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlSelect1">
                              <Form.Label>Example select</Form.Label>
                              <Form.Control as="select">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                              </Form.Control>
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlSelect2">
                              <Form.Label>Example multiple select</Form.Label>
                              <Form.Control as="select" multiple>
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                              </Form.Control>
                           </Form.Group>
                           <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Example textarea</Form.Label>
                              <Form.Control as="textarea" rows={3} />
                           </Form.Group>
                           <Button type="submit">Search</Button>
                        </Form>
                     </ListGroup.Item>
                  </ListGroup>
               </Col>
               <Col md={9}>
                  <h1>Top Rated Movies</h1>
                  {loading ? (
                     <Loader />
                  ) : error ? (
                     <Message variant="danger">{error}</Message>
                  ) : (
                     <Row>
                        {dmovies.map((movie) => (
                           <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
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
         </Row>
      </>
   );
};

export default MoviesScreen;
