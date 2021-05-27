import React, { useEffect } from "react";
import { Col, ListGroup, Row, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import TvShow from "./../components/TvShow";
import { latestMovies, trendingItems } from "./../actions/movieActions";
import { latestTvShows } from "./../actions/tvActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const HomeScreen = ({ history }) => {
   const dispatch = useDispatch();
   const latestMovie = useSelector((state) => state.latestMovie);
   const { loading, movies, error } = latestMovie;

   const latestTv = useSelector((state) => state.latestTv);
   const { loading: tvLoading, tvShows, error: tvError } = latestTv;

   const trendingItem = useSelector((state) => state.trendingItem);
   const {
      loading: trendingLoading,
      items,
      error: trendingError
   } = trendingItem;

   useEffect(() => {
      dispatch(latestMovies());
      dispatch(latestTvShows());
      dispatch(trendingItems());
   }, [dispatch, history]);
   return (
      <>
         <Row>
            <Col md={9}>
               <h1>Top Rated Movies</h1>
               {loading ? (
                  <Loader />
               ) : error ? (
                  <Message variant="danger">{error}</Message>
               ) : (
                  <Row>
                     {movies.map((movie) => (
                        <Col key={movie.id} sm={12} md={6} lg={4} xl={3}>
                           <Movie movie={movie} />
                        </Col>
                     ))}
                     <Movie />
                  </Row>
               )}

               <hr className="light" />

               <h1>Top Rated TV Shows</h1>
               {tvLoading ? (
                  <Loader />
               ) : tvError ? (
                  <Message variant="danger">{tvError}</Message>
               ) : (
                  <Row>
                     {tvShows.map((tvShow) => (
                        <Col key={tvShow.id} sm={12} md={6} lg={4} xl={3}>
                           <TvShow tvShow={tvShow} />
                        </Col>
                     ))}
                     <Movie />
                  </Row>
               )}
            </Col>
            <Col>
               <br />
               {trendingLoading ? (
                  <Loader />
               ) : trendingError ? (
                  <Message variant="danger">{trendingError}</Message>
               ) : (
                  <>
                     <h1>Top {items.length} Trending</h1>
                     <ListGroup>
                        {items.map((item) => (
                           <ListGroup.Item key={item.id}>
                              <Row>
                                 <Col md={4}>
                                    <Link
                                       to={
                                          item.media_type === "tv"
                                             ? `/tvshow/${item.id}`
                                             : `/movie/${item.id}`
                                       }
                                    >
                                       <Image
                                          src={`${process.env.REACT_APP_IMAGE_URL}/${item.poster_path}`}
                                          thumbnail
                                       />
                                    </Link>
                                 </Col>
                                 <Col md={8}>
                                    <ListGroup>
                                       <ListGroup.Item>
                                          Rating: {item.vote_average}
                                       </ListGroup.Item>
                                       <ListGroup.Item>
                                          Type:{" "}
                                          {item.media_type &&
                                             (item.media_type === "tv"
                                                ? "TV Show"
                                                : "Movie")}
                                       </ListGroup.Item>
                                       <ListGroup.Item>
                                          {item.media_type &&
                                             (item.media_type === "tv"
                                                ? `First Air Date: ${item.first_air_date}`
                                                : `Release Date: ${item.release_date}`)}
                                       </ListGroup.Item>
                                       <ListGroup.Item>
                                          Name:{" "}
                                          {item.media_type &&
                                             (item.media_type === "tv"
                                                ? `${item.name}`
                                                : `${item.title}`)}
                                       </ListGroup.Item>
                                    </ListGroup>
                                 </Col>
                              </Row>
                           </ListGroup.Item>
                        ))}
                     </ListGroup>
                  </>
               )}
            </Col>
         </Row>
      </>
   );
};

export default HomeScreen;
