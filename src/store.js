import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
   latestMovieReducer,
   trendingItemReducer,
   playingMovieReducer,
   trendingMoviesReducer,
   discoverMoviesReducer,
   upcommingMoviesReducer,
   topRatedMoviesReducer,
   individualMovieReducer,
   movieCastReducer,
   movieReviewReducer,
   movieRecommendationsReducer,
   movieSimilarsReducer,
   movieVideosReducer
} from "./reducers/movieReducers";
import {
   discoverTvShowsReducer,
   latestTvReducer,
   airingTodayTvShowsReducer,
   onTvShowsReducer,
   individualTvReducer,
   tvCastReducer,
   tvVideosReducer,
   tvRecommendationsReducer,
   tvSimilarsReducer,
   tvReviewsReducer
} from "./reducers/tvReducers";
import {
   individualPeopleReducer,
   peopleMovieReducer,
   peoplesReducer,
   peopleTvReducer
} from "./reducers/peopleReducers";

const initialState = {};
const reducer = combineReducers({
   latestMovie: latestMovieReducer,
   latestTv: latestTvReducer,
   trendingItem: trendingItemReducer,
   playingMovie: playingMovieReducer,
   trendingMovies: trendingMoviesReducer,
   discoverMovies: discoverMoviesReducer,
   upcommingMovies: upcommingMoviesReducer,
   topRatedMovies: topRatedMoviesReducer,
   discoverTvShows: discoverTvShowsReducer,
   airingTodayTvShows: airingTodayTvShowsReducer,
   onTvShows: onTvShowsReducer,
   peoples: peoplesReducer,
   individualMovie: individualMovieReducer,
   movieCast: movieCastReducer,
   movieReview: movieReviewReducer,
   movieRecommendations: movieRecommendationsReducer,
   movieSimilars: movieSimilarsReducer,
   movieVideos: movieVideosReducer,
   individualTv: individualTvReducer,
   tvCast: tvCastReducer,
   tvVideos: tvVideosReducer,
   tvRecommendations: tvRecommendationsReducer,
   tvSimilars: tvSimilarsReducer,
   tvReviews: tvReviewsReducer,
   individualPeople: individualPeopleReducer,
   peopleMovie: peopleMovieReducer,
   peopleTv: peopleTvReducer
});

const middleware = [thunk];

const store = createStore(
   reducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
