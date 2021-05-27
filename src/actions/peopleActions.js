import {
   PEOPLE_REQUEST,
   PEOPLE_SUCCESS,
   PEOPLE_FAIL,
   PEOPLE_DETAILS_REQUEST,
   PEOPLE_DETAILS_SUCCESS,
   PEOPLE_DETAILS_FAIL,
   PEOPLE_MOVIE_REQUEST,
   PEOPLE_MOVIE_SUCCESS,
   PEOPLE_MOVIE_FAIL,
   PEOPLE_TV_REQUEST,
   PEOPLE_TV_SUCCESS,
   PEOPLE_TV_FAIL
} from "./../constants/peopleConstant";
import axios from "axios";
export const allPeoples = (page = "") => async (dispatch) => {
   try {
      dispatch({
         type: PEOPLE_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&region=us`
      );
      console.log(data);
      console.log(page);
      dispatch({
         type: PEOPLE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: PEOPLE_FAIL,
         payload: message
      });
   }
};

export const getPeopleDetails = (peopleId) => async (dispatch) => {
   try {
      dispatch({
         type: PEOPLE_DETAILS_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/person/${peopleId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: PEOPLE_DETAILS_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: PEOPLE_DETAILS_FAIL,
         payload: message
      });
   }
};

export const getPeopleMovies = (peopleId) => async (dispatch) => {
   try {
      dispatch({
         type: PEOPLE_MOVIE_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/person/${peopleId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: PEOPLE_MOVIE_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: PEOPLE_MOVIE_FAIL,
         payload: message
      });
   }
};

export const getPeopleTvShows = (peopleId) => async (dispatch) => {
   try {
      dispatch({
         type: PEOPLE_TV_REQUEST
      });
      const { data } = await axios.get(
         `${process.env.REACT_APP_API_URL}/person/${peopleId}/tv_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      dispatch({
         type: PEOPLE_TV_SUCCESS,
         payload: data
      });
   } catch (error) {
      const message =
         error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
      dispatch({
         type: PEOPLE_TV_FAIL,
         payload: message
      });
   }
};
