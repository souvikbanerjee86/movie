import axios from "axios";
import {
   DISCOVER_MOVIE_FAIL,
   DISCOVER_MOVIE_SUCCESS,
   INDIVIDUAL_MOVIE_FAIL,
   INDIVIDUAL_MOVIE_REQUEST,
   LATEST_MOVIE_REQUEST,
   LATEST_MOVIE_SUCCESS,
   MOVIE_CAST_SUCCESS,
   MOVIE_RECOMMENDATION_REQUEST,
   MOVIE_RECOMMENDATION_SUCCESS,
   MOVIE_REVIEW_FAIL,
   MOVIE_REVIEW_REQUEST,
   MOVIE_SIMILAR_FAIL,
   MOVIE_SIMILAR_REQUEST,
   MOVIE_VIDEOS_SUCCESS,
   PLAYING_MOVIE_FAIL,
   PLAYING_MOVIE_REQUEST,
   TOPRATED_MOVIE_FAIL,
   TOPRATED_MOVIE_SUCCESS,
   TRENDING_ITEM_FAIL,
   TRENDING_ITEM_SUCCESS,
   TRENDING_MOVIE_FAIL,
   TRENDING_MOVIE_REQUEST,
   UPCOMMING_MOVIE_FAIL,
   UPCOMMING_MOVIE_REQUEST,
   UPCOMMING_MOVIE_SUCCESS
} from "../constants/movieConstant";
import {
   LATEST_MOVIE_FAIL,
   TRENDING_ITEM_REQUEST,
   PLAYING_MOVIE_SUCCESS,
   TRENDING_MOVIE_SUCCESS,
   DISCOVER_MOVIE_REQUEST,
   PLAYING_MOVIE_RESET,
   TOPRATED_MOVIE_REQUEST,
   INDIVIDUAL_MOVIE_SUCCESS,
   MOVIE_CAST_REQUEST,
   MOVIE_CAST_FAIL,
   MOVIE_REVIEW_SUCCESS,
   MOVIE_RECOMMENDATION_FAIL,
   MOVIE_SIMILAR_SUCCESS,
   MOVIE_VIDEOS_REQUEST,
   MOVIE_VIDEOS_FAIL
} from "./../constants/movieConstant";

export const latestMovies = () => async (dispatch) => {
   try {
      dispatch({
         type: LATEST_MOVIE_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&pag=1&region=us`
      );
      dispatch({
         type: LATEST_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: LATEST_MOVIE_FAIL,
         payload: message
      });
   }
};

export const trendingItems = (page = 1) => async (dispatch) => {
   try {
      dispatch({
         type: TRENDING_ITEM_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: TRENDING_ITEM_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TRENDING_ITEM_FAIL,
         payload: message
      });
   }
};

export const playingMovies = (page = 1) => async (dispatch) => {
   try {
      dispatch({
         type: PLAYING_MOVIE_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: PLAYING_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: PLAYING_MOVIE_FAIL,
         payload: message
      });
   }
};

export const trendingMovie = (page = 1) => async (dispatch) => {
   try {
      dispatch({
         type: TRENDING_MOVIE_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: TRENDING_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TRENDING_MOVIE_FAIL,
         payload: message
      });
   }
};

export const discoverMovie = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: DISCOVER_MOVIE_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&sort_by=${search}&region=us`
      );
      dispatch({
         type: PLAYING_MOVIE_RESET
      });
      dispatch({
         type: DISCOVER_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: DISCOVER_MOVIE_FAIL,
         payload: message
      });
   }
};

export const upcommingMovie = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: UPCOMMING_MOVIE_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: UPCOMMING_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: UPCOMMING_MOVIE_FAIL,
         payload: message
      });
   }
};

export const topRatedMovie = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: TOPRATED_MOVIE_REQUEST
      });
      console.log("HHHHHH");
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: TOPRATED_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TOPRATED_MOVIE_FAIL,
         payload: message
      });
   }
};

export const getMovieDetails = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: INDIVIDUAL_MOVIE_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: INDIVIDUAL_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: INDIVIDUAL_MOVIE_FAIL,
         payload: message
      });
   }
};

export const getMovieCastAndCrew = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: MOVIE_CAST_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: MOVIE_CAST_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: MOVIE_CAST_FAIL,
         payload: message
      });
   }
};

export const getMovieReviews = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: MOVIE_REVIEW_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: MOVIE_REVIEW_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: MOVIE_REVIEW_FAIL,
         payload: message
      });
   }
};

export const getMovieRecommendations = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: MOVIE_RECOMMENDATION_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: MOVIE_RECOMMENDATION_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: MOVIE_RECOMMENDATION_FAIL,
         payload: message
      });
   }
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: MOVIE_SIMILAR_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: MOVIE_SIMILAR_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: MOVIE_SIMILAR_FAIL,
         payload: message
      });
   }
};

export const getMovieVideos = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: MOVIE_VIDEOS_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: MOVIE_VIDEOS_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: MOVIE_VIDEOS_FAIL,
         payload: message
      });
   }
};
