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
   PEOPLE_TV_FAIL,
   PEOPLE_RESET
} from "./../constants/peopleConstant";
export const peoplesReducer = (state = { stars: [] }, action) => {
   switch (action.type) {
      case PEOPLE_REQUEST:
         return { loading: true };
      case PEOPLE_SUCCESS:
         return {
            loading: false,
            stars: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case PEOPLE_FAIL:
         return { loading: false, error: action.payload };
      case PEOPLE_RESET:
         return { stars: [] };
      default:
         return state;
   }
};

export const individualPeopleReducer = (state = { people: {} }, action) => {
   switch (action.type) {
      case PEOPLE_DETAILS_REQUEST:
         return { loading: true };
      case PEOPLE_DETAILS_SUCCESS:
         return { loading: false, people: action.payload };
      case PEOPLE_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const peopleMovieReducer = (state = { movies: [] }, action) => {
   switch (action.type) {
      case PEOPLE_MOVIE_REQUEST:
         return { loading: true };
      case PEOPLE_MOVIE_SUCCESS:
         return {
            loading: false,
            movies: action.payload
         };
      case PEOPLE_MOVIE_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const peopleTvReducer = (state = { tvshows: [] }, action) => {
   switch (action.type) {
      case PEOPLE_TV_REQUEST:
         return { loading: true };
      case PEOPLE_TV_SUCCESS:
         return {
            loading: false,
            tvshows: action.payload
         };
      case PEOPLE_TV_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
