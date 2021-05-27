import axios from "axios";
import {
   AIRING_TODAY_TV_FAIL,
   AIRING_TODAY_TV_REQUEST,
   DISCOVER_TV_SUCCESS,
   LATEST_TV_REQUEST,
   LATEST_TV_SUCCESS,
   ON_TV_SUCCESS,
   INDIVIDUAL_TV_REQUEST,
   INDIVIDUAL_TV_SUCCESS,
   INDIVIDUAL_TV_FAIL,
   TV_VIDEOS_REQUEST,
   TV_VIDEOS_SUCCESS,
   TV_VIDEOS_FAIL,
   TV_RECOMMENDATION_REQUEST,
   TV_RECOMMENDATION_SUCCESS,
   TV_RECOMMENDATION_FAIL,
   TV_SIMILAR_REQUEST,
   TV_SIMILAR_SUCCESS,
   TV_SIMILAR_FAIL,
   TV_REVIEW_REQUEST,
   TV_REVIEW_SUCCESS,
   TV_REVIEW_FAIL
} from "../constants/tvConstant";
import {
   LATEST_TV_FAIL,
   DISCOVER_TV_REQUEST,
   DISCOVER_TV_FAIL,
   AIRING_TODAY_TV_SUCCESS,
   ON_TV_REQUEST,
   ON_TV_FAIL,
   TV_CAST_REQUEST,
   TV_CAST_SUCCESS,
   TV_CAST_FAIL
} from "./../constants/tvConstant";

export const latestTvShows = (page = 1) => async (dispatch) => {
   try {
      dispatch({
         type: LATEST_TV_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: LATEST_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: LATEST_TV_FAIL,
         payload: message
      });
   }
};

export const discoverTvShow = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: DISCOVER_TV_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&sort_by=${search}&region=us`
      );
      dispatch({
         type: DISCOVER_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: DISCOVER_TV_FAIL,
         payload: message
      });
   }
};

export const airingTvShow = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: AIRING_TODAY_TV_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: AIRING_TODAY_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: AIRING_TODAY_TV_FAIL,
         payload: message
      });
   }
};

export const onTvShow = (page = 1, search = "") => async (dispatch) => {
   try {
      dispatch({
         type: ON_TV_REQUEST
      });
      console.log(process.env.REACT_APP_API_URL);
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      dispatch({
         type: ON_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: ON_TV_FAIL,
         payload: message
      });
   }
};

export const getTvDetails = (movieId) => async (dispatch) => {
   try {
      dispatch({
         type: INDIVIDUAL_TV_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: INDIVIDUAL_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: INDIVIDUAL_TV_FAIL,
         payload: message
      });
   }
};

export const getTvCastAndCrew = (tvId) => async (dispatch) => {
   try {
      dispatch({
         type: TV_CAST_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${tvId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: TV_CAST_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TV_CAST_FAIL,
         payload: message
      });
   }
};

export const getTvVideos = (tvId) => async (dispatch) => {
   try {
      dispatch({
         type: TV_VIDEOS_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${tvId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: TV_VIDEOS_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TV_VIDEOS_FAIL,
         payload: message
      });
   }
};

export const getTvRecommendations = (tvId) => async (dispatch) => {
   try {
      dispatch({
         type: TV_RECOMMENDATION_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${tvId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: TV_RECOMMENDATION_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TV_RECOMMENDATION_FAIL,
         payload: message
      });
   }
};

export const getSimilarTvShows = (tvId) => async (dispatch) => {
   try {
      dispatch({
         type: TV_SIMILAR_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${tvId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: TV_SIMILAR_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TV_SIMILAR_FAIL,
         payload: message
      });
   }
};

export const getTvReviews = (tvId) => async (dispatch) => {
   try {
      dispatch({
         type: TV_REVIEW_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/tv/${tvId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      console.log(data);
      dispatch({
         type: TV_REVIEW_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: TV_REVIEW_FAIL,
         payload: message
      });
   }
};
