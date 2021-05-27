import {
   LATEST_MOVIE_REQUEST,
   LATEST_MOVIE_SUCCESS,
   LATEST_MOVIE_FAIL,
   LATEST_MOVIE_RESET,
   TRENDING_ITEM_REQUEST,
   TRENDING_ITEM_SUCCESS,
   TRENDING_ITEM_FAIL,
   PLAYING_MOVIE_REQUEST,
   PLAYING_MOVIE_SUCCESS,
   PLAYING_MOVIE_FAIL,
   PLAYING_MOVIE_RESET,
   TRENDING_MOVIE_REQUEST,
   TRENDING_MOVIE_SUCCESS,
   TRENDING_MOVIE_FAIL,
   DISCOVER_MOVIE_REQUEST,
   DISCOVER_MOVIE_SUCCESS,
   DISCOVER_MOVIE_FAIL,
   UPCOMMING_MOVIE_REQUEST,
   UPCOMMING_MOVIE_SUCCESS,
   UPCOMMING_MOVIE_FAIL,
   TOPRATED_MOVIE_REQUEST,
   TOPRATED_MOVIE_SUCCESS,
   TOPRATED_MOVIE_FAIL,
   INDIVIDUAL_MOVIE_REQUEST,
   INDIVIDUAL_MOVIE_SUCCESS,
   INDIVIDUAL_MOVIE_FAIL,
   MOVIE_CAST_REQUEST,
   MOVIE_CAST_SUCCESS,
   MOVIE_CAST_FAIL,
   MOVIE_REVIEW_REQUEST,
   MOVIE_REVIEW_SUCCESS,
   MOVIE_REVIEW_FAIL,
   MOVIE_RECOMMENDATION_REQUEST,
   MOVIE_RECOMMENDATION_SUCCESS,
   MOVIE_RECOMMENDATION_FAIL,
   MOVIE_SIMILAR_REQUEST,
   MOVIE_SIMILAR_SUCCESS,
   MOVIE_SIMILAR_FAIL,
   MOVIE_VIDEOS_REQUEST,
   MOVIE_VIDEOS_SUCCESS,
   MOVIE_VIDEOS_FAIL
} from "./../constants/movieConstant";
export const latestMovieReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case LATEST_MOVIE_REQUEST:
         return { loading: true };
      case LATEST_MOVIE_SUCCESS:
         return {
            loading: false,
            movies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case LATEST_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      case LATEST_MOVIE_RESET:
         return { movies: [] };
      default:
         return state;
   }
};

export const trendingItemReducer = (state = { items: [] }, action) => {
   switch (action.type) {
      case TRENDING_ITEM_REQUEST:
         return { loading: true };
      case TRENDING_ITEM_SUCCESS:
         return {
            loading: false,
            items: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case TRENDING_ITEM_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const playingMovieReducer = (state = { pmovies: [] }, action) => {
   switch (action.type) {
      case PLAYING_MOVIE_REQUEST:
         return { loading: true };
      case PLAYING_MOVIE_SUCCESS:
         return {
            loading: false,
            pmovies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case PLAYING_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      case PLAYING_MOVIE_RESET:
         return { pmovies: [] };
      default:
         return state;
   }
};

export const trendingMoviesReducer = (state = { tmovies: [] }, action) => {
   switch (action.type) {
      case TRENDING_MOVIE_REQUEST:
         return { loading: true };
      case TRENDING_MOVIE_SUCCESS:
         return {
            loading: false,
            tmovies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case TRENDING_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const discoverMoviesReducer = (state = { dmovies: [] }, action) => {
   switch (action.type) {
      case DISCOVER_MOVIE_REQUEST:
         return { loading: true };
      case DISCOVER_MOVIE_SUCCESS:
         return {
            loading: false,
            dmovies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case DISCOVER_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const upcommingMoviesReducer = (state = { cmovies: [] }, action) => {
   switch (action.type) {
      case UPCOMMING_MOVIE_REQUEST:
         return { loading: true };
      case UPCOMMING_MOVIE_SUCCESS:
         return {
            loading: false,
            cmovies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case UPCOMMING_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const topRatedMoviesReducer = (state = { tmovies: [] }, action) => {
   switch (action.type) {
      case TOPRATED_MOVIE_REQUEST:
         return { loading: true };
      case TOPRATED_MOVIE_SUCCESS:
         return {
            loading: false,
            tmovies: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case TOPRATED_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const individualMovieReducer = (state = { movie: {} }, action) => {
   switch (action.type) {
      case INDIVIDUAL_MOVIE_REQUEST:
         return { loading: true };
      case INDIVIDUAL_MOVIE_SUCCESS:
         return { loading: false, movie: action.payload };
      case INDIVIDUAL_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const movieCastReducer = (state = { moviePeoples: [] }, action) => {
   switch (action.type) {
      case MOVIE_CAST_REQUEST:
         return { loading: true };
      case MOVIE_CAST_SUCCESS:
         return { loading: false, moviePeoples: action.payload };
      case MOVIE_CAST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const movieReviewReducer = (state = { reviews: [] }, action) => {
   switch (action.type) {
      case MOVIE_REVIEW_REQUEST:
         return { loading: true };
      case MOVIE_REVIEW_SUCCESS:
         return {
            loading: false,
            reviews: action.payload.results,
            count: action.payload.results.length
         };
      case MOVIE_REVIEW_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const movieRecommendationsReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case MOVIE_RECOMMENDATION_REQUEST:
         return { loading: true };
      case MOVIE_RECOMMENDATION_SUCCESS:
         return { loading: false, movies: action.payload.results };
      case MOVIE_RECOMMENDATION_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const movieSimilarsReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case MOVIE_SIMILAR_REQUEST:
         return { loading: true };
      case MOVIE_SIMILAR_SUCCESS:
         return {
            loading: false,
            movies: action.payload.results,
            count: action.payload.results.length
         };
      case MOVIE_SIMILAR_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const movieVideosReducer = (state = { videos: [] }, action) => {
   switch (action.type) {
      case MOVIE_VIDEOS_REQUEST:
         return { loading: true };
      case MOVIE_VIDEOS_SUCCESS:
         return {
            loading: false,
            videos: action.payload.results,
            count: action.payload.results.length
         };
      case MOVIE_VIDEOS_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
