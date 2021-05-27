import React, { useEffect } from "react";
import { Badge, Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
   getMovieDetails,
   getMovieCastAndCrew,
   getMovieReviews,
   getSimilarMovies,
   getMovieVideos
} from "../actions/movieActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Review from "../components/Review";
import Cast from "./../components/Cast";
import { getMovieRecommendations } from "./../actions/movieActions";
import Recommendations from "./../components/Recommendations";
import MovieVideos from "./../components/MovieVideos";
const MovieScreen = ({ match, history }) => {
   const movieId = match.params.id;
   const dispatch = useDispatch();
   const individualMovie = useSelector((state) => state.individualMovie);
   const { loading, error, movie } = individualMovie;

   const movieCast = useSelector((state) => state.movieCast);
   const { loading: castLoading, error: castError, moviePeoples } = movieCast;

   const movieReview = useSelector((state) => state.movieReview);
   const {
      loading: reviewLoading,
      error: reviewError,
      reviews,
      count
   } = movieReview;

   const movieRecommendations = useSelector(
      (state) => state.movieRecommendations
   );
   const {
      loading: recLoading,
      error: recError,
      movies
   } = movieRecommendations;

   const movieSimilars = useSelector((state) => state.movieSimilars);
   const {
      loading: sLoading,
      error: sError,
      movies: sMovies,
      count: sCount
   } = movieSimilars;

   const movieVideos = useSelector((state) => state.movieVideos);
   const {
      loading: vLoading,
      error: vError,
      videos,
      count: vCount
   } = movieVideos;

   const timing = (time) => {
      var Hours = Math.floor(time / 60);
      var minutes = time % 60;
      return Hours + " hr " + minutes + " min";
   };
   useEffect(() => {
      if (movieId) {
         dispatch(getMovieDetails(movieId));
         dispatch(getMovieCastAndCrew(movieId));
         dispatch(getMovieReviews(movieId));
         dispatch(getMovieRecommendations(movieId));
         dispatch(getSimilarMovies(movieId));
         dispatch(getMovieVideos(movieId));
      }
   }, [dispatch, movieId, history]);
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
            movie && (
               <Row>
                  <Col md={3}>
                     {movie.backdrop_path != null ? (
                        <Image
                           src={`${process.env.REACT_APP_IMAGE_URL}/${movie.backdrop_path}`}
                           alt={movie.title}
                           fluid
                        />
                     ) : (
                        <Image
                           fluid
                           src="https://via.placeholder.com/250x350"
                           alt={movie.title}
                        />
                     )}
                  </Col>
                  <Col md={6}>
                     <ListGroup variant="flush">
                        <ListGroup.Item>
                           <h3>
                              {movie.original_title}(
                              {movie.release_date &&
                                 movie.release_date.substring(0, 4)}
                              )
                           </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           User Score{" "}
                           {movie.vote_average
                              ? movie.vote_average + "/10"
                              : "No Rating Yet"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Release Date: {movie.release_date}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Run time: {timing(movie.runtime)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Genres :{" "}
                           {movie.genres &&
                              movie.genres.map((genre) => (
                                 <>
                                    <Badge variant="secondary" key={genre.id}>
                                       {genre.name}
                                    </Badge>{" "}
                                 </>
                              ))}
                        </ListGroup.Item>
                        <ListGroup.Item>Overview</ListGroup.Item>
                        <ListGroup.Item>{movie.overview}</ListGroup.Item>
                     </ListGroup>
                  </Col>
                  <Col md={3}></Col>
               </Row>
            )
         )}
         <h1>Watch Trailers</h1>
         {vLoading && <Loader />}
         {vError && <Message variant="danger">{vError}</Message>}
         {vCount === 0 && <h4>No Trailer Available</h4>}
         {videos && (
            <ListGroup horizontal className="Slide">
               <MovieVideos videos={videos} />
            </ListGroup>
         )}

         <h1>Top Billed Cast</h1>
         {castLoading && <Loader />}
         {castError && <Message variant="danger">{castError}</Message>}

         {moviePeoples && (
            <ListGroup horizontal className="Slide">
               <Cast casts={moviePeoples.cast} />
            </ListGroup>
         )}

         <h1>Recommendations</h1>
         {recLoading && <Loader />}
         {recError && <Message variant="danger">{recError}</Message>}
         {movies && (
            <ListGroup horizontal className="Slide">
               <Recommendations recommendations={movies} />
            </ListGroup>
         )}

         <h1>Similar Movies</h1>
         {sLoading && <Loader />}
         {sError && <Message variant="danger">{sError}</Message>}
         {sCount === 0 && <h4>No Movie Found</h4>}
         {sMovies && (
            <ListGroup horizontal className="Slide">
               <Recommendations recommendations={sMovies} />
            </ListGroup>
         )}

         <h1>Reviews</h1>
         {reviewLoading && <Loader />}
         {reviewError && <Message variant="danger">{reviewError}</Message>}
         {count === 0 && <h4>No Review Found</h4>}
         {reviews && <Review reviews={reviews} />}
      </>
   );
};

export default MovieScreen;
