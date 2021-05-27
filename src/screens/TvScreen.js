import React, { useEffect } from "react";
import {
   Badge,
   Button,
   Card,
   Col,
   Image,
   ListGroup,
   Row
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";
import {
   getSimilarTvShows,
   getTvCastAndCrew,
   getTvDetails,
   getTvRecommendations,
   getTvReviews
} from "../actions/tvActions";
import Cast from "./../components/Cast";
import { getTvVideos } from "./../actions/tvActions";
import MovieVideos from "./../components/MovieVideos";
import TvRecommendations from "../components/TvRecommendations";
import Review from "../components/Review";
const TvScreen = ({ match, history }) => {
   const tvId = match.params.id;
   const dispatch = useDispatch();

   const individualTv = useSelector((state) => state.individualTv);
   const { loading, error, tv } = individualTv;

   const tvCast = useSelector((state) => state.tvCast);
   const { loading: castLoading, error: castError, tvPeoples } = tvCast;

   const tvVideos = useSelector((state) => state.tvVideos);
   const { loading: vLoading, error: vError, videos, count: vCount } = tvVideos;

   const tvRecommendations = useSelector((state) => state.tvRecommendations);
   const {
      loading: rLoading,
      error: rError,
      tvShows,
      count: rCount
   } = tvRecommendations;

   const tvSimilars = useSelector((state) => state.tvSimilars);
   const {
      loading: sLoading,
      error: sError,
      tvShows: sTvShows,
      count: sCount
   } = tvSimilars;

   const tvReviews = useSelector((state) => state.tvReviews);
   const {
      loading: reviewLoading,
      error: reviewError,
      reviews,
      count: reviewCount
   } = tvReviews;

   useEffect(() => {
      if (tvId) {
         dispatch(getTvDetails(tvId));
         dispatch(getTvCastAndCrew(tvId));
         dispatch(getTvVideos(tvId));
         dispatch(getTvRecommendations(tvId));
         dispatch(getSimilarTvShows(tvId));
         dispatch(getTvReviews(tvId));
      }
   }, [dispatch, tvId, history]);
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
            tv && (
               <Row>
                  <Col md={2}>
                     {tv.poster_path != null ? (
                        <Image
                           src={`${process.env.REACT_APP_IMAGE_URL}/${tv.poster_path}`}
                           alt={tv.original_name}
                           fluid
                        />
                     ) : (
                        <Image
                           fluid
                           src="https://via.placeholder.com/250x350"
                           alt={tv.original_name}
                        />
                     )}
                  </Col>
                  <Col md={7}>
                     <ListGroup variant="flush">
                        <ListGroup.Item>
                           <h3>
                              {tv.original_name}({tv.tagline})
                           </h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           User Score{" "}
                           {tv.vote_average
                              ? tv.vote_average + "/10"
                              : "No Rating Yet"}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           First Air Date {tv.first_air_date}
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Genres :{" "}
                           {tv.genres &&
                              tv.genres.map((genre) => (
                                 <>
                                    <Badge variant="secondary" key={genre.id}>
                                       {genre.name}
                                    </Badge>{" "}
                                 </>
                              ))}
                        </ListGroup.Item>
                        <ListGroup.Item>Overview</ListGroup.Item>
                        <ListGroup.Item>{tv.overview}</ListGroup.Item>
                     </ListGroup>
                  </Col>
                  <Col md={3}></Col>
               </Row>
            )
         )}
         {tv && (
            <>
               <h1>Seasons</h1>
               <ListGroup horizontal className="Slide">
                  {tv.seasons &&
                     tv.seasons.map((season) => (
                        <ListGroup.Item key={season.id}>
                           {season.poster_path != null ? (
                              <Card.Img
                                 variant="top"
                                 src={`${process.env.REACT_APP_IMAGE_URL}/${season.poster_path}`}
                                 alt={season.name}
                              />
                           ) : (
                              <Card.Img
                                 variant="bottom"
                                 src="https://via.placeholder.com/250x330"
                                 alt={season.name}
                              />
                           )}
                           <Card.Body as="div">
                              <Card.Subtitle>{season.name}</Card.Subtitle>
                           </Card.Body>
                        </ListGroup.Item>
                     ))}
               </ListGroup>
            </>
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

         <h1>Series Cast</h1>
         {castLoading && <Loader />}
         {castError && <Message variant="danger">{castError}</Message>}

         {tvPeoples && (
            <ListGroup horizontal className="Slide">
               <Cast casts={tvPeoples.cast} />
            </ListGroup>
         )}

         <h1>Recommendation Series</h1>
         {rLoading && <Loader />}
         {rError && <Message variant="danger">{rError}</Message>}
         {rCount === 0 && <h4>No Movie Found</h4>}
         {tvShows && (
            <ListGroup horizontal className="Slide">
               <TvRecommendations recommendations={tvShows} />
            </ListGroup>
         )}

         <h1>Similar Movies</h1>
         {sLoading && <Loader />}
         {sError && <Message variant="danger">{sError}</Message>}
         {sCount === 0 && <h4>No Movie Found</h4>}
         {sTvShows && (
            <ListGroup horizontal className="Slide">
               <TvRecommendations recommendations={sTvShows} />
            </ListGroup>
         )}

         <h1>Reviews</h1>
         {reviewLoading && <Loader />}
         {reviewError && <Message variant="danger">{reviewError}</Message>}
         {reviewCount === 0 && <h4>No Review Found</h4>}
         {reviews && <Review reviews={reviews} />}
      </>
   );
};

export default TvScreen;
