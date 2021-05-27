import React, { useEffect } from "react";
import { Badge, Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
   getPeopleDetails,
   getPeopleMovies,
   getPeopleTvShows
} from "../actions/peopleActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import MovieList from "../components/MovieList";
import TvList from "../components/TvList";
import Recommendations from "./../components/Recommendations";
const PeopleScreen = ({ match, history }) => {
   const peopleId = match.params.id;
   const dispatch = useDispatch();
   const individualPeople = useSelector((state) => state.individualPeople);
   const { loading, error, people } = individualPeople;

   const peopleMovie = useSelector((state) => state.peopleMovie);
   const { loading: mLoading, error: mError, movies, count } = peopleMovie;

   const peopleTv = useSelector((state) => state.peopleTv);
   const {
      loading: tvLoading,
      error: tvError,
      tvshows,
      count: tvCount
   } = peopleTv;

   useEffect(() => {
      if (peopleId) {
         dispatch(getPeopleDetails(peopleId));
         dispatch(getPeopleMovies(peopleId));
         dispatch(getPeopleTvShows(peopleId));
      }
   }, [dispatch, peopleId, history]);
   return (
      <>
         <Button
            className="btn btn-light my-3"
            onClick={() => history.goBack()}
         >
            Go Back
         </Button>
         {loading ? (
            <Loader />
         ) : error ? (
            <Message variant="danger">{error}</Message>
         ) : (
            people && (
               <Row>
                  <Col md={3}>
                     {people.profile_path != null ? (
                        <Image
                           src={`${process.env.REACT_APP_IMAGE_URL}/${people.profile_path}`}
                           alt={people.name}
                           fluid
                        />
                     ) : (
                        <Image
                           fluid
                           src="https://via.placeholder.com/250x350"
                           alt={people.name}
                        />
                     )}
                  </Col>
                  <Col md={6}>
                     <ListGroup variant="flush">
                        <ListGroup.Item>
                           Name{": "}
                           {people.name}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Known For{": "}
                           {people.known_for_department}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Birth Date: {people.birthday}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Place of Birth: {people.place_of_birth}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Also knowns as :{" "}
                           {people.also_known_as &&
                              people.also_known_as.map((name, index) => (
                                 <>
                                    <Badge variant="secondary" key={index}>
                                       {name}
                                    </Badge>{" "}
                                 </>
                              ))}
                        </ListGroup.Item>
                        <ListGroup.Item>Biography</ListGroup.Item>
                        <ListGroup.Item>{people.biography}</ListGroup.Item>
                     </ListGroup>
                  </Col>
                  <Col md={3}></Col>
               </Row>
            )
         )}
         <h1>Known For</h1>
         {mLoading && <Loader />}
         {mError && <Message variant="danger">{mError}</Message>}
         {movies && movies.cast && (
            <ListGroup horizontal className="Slide">
               <Recommendations recommendations={movies.cast} />
            </ListGroup>
         )}
         <Row>
            <Col md={6}>
               <h2>Known Moviews</h2>
               {mLoading && <Loader />}
               {mError && <Message variant="danger">{mError}</Message>}
               {count === 0 && <h4>No Movie Available</h4>}
               {movies &&
                  movies.cast &&
                  movies.cast.map((movie) => (
                     <MovieList key={movie.id} movie={movie} />
                  ))}
            </Col>
            <Col md={6}>
               <h2>Known Tv Shows</h2>
               {tvLoading && <Loader />}
               {tvError && <Message variant="danger">{tvError}</Message>}
               {tvCount === 0 && <h4>No Tv Show Available</h4>}
               {tvshows &&
                  tvshows.cast &&
                  tvshows.cast.map((tv) => <TvList key={tv.id} tv={tv} />)}
            </Col>
         </Row>
      </>
   );
};

export default PeopleScreen;
