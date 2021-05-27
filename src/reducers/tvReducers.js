import {
   LATEST_TV_REQUEST,
   LATEST_TV_SUCCESS,
   LATEST_TV_FAIL,
   LATEST_TV_RESET,
   DISCOVER_TV_REQUEST,
   DISCOVER_TV_SUCCESS,
   DISCOVER_TV_FAIL,
   AIRING_TODAY_TV_REQUEST,
   AIRING_TODAY_TV_SUCCESS,
   AIRING_TODAY_TV_FAIL,
   ON_TV_REQUEST,
   ON_TV_SUCCESS,
   ON_TV_FAIL,
   TV_CAST_SUCCESS,
   TV_CAST_REQUEST,
   TV_CAST_FAIL,
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
} from "./../constants/tvConstant";
export const latestTvReducer = (state = { tvShows: [] }, action) => {
   switch (action.type) {
      case LATEST_TV_REQUEST:
         return { loading: true };
      case LATEST_TV_SUCCESS:
         return {
            loading: false,
            tvShows: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case LATEST_TV_FAIL:
         return { loading: false, error: action.payload };
      case LATEST_TV_RESET:
         return { tvShows: [] };
      default:
         return state;
   }
};

export const discoverTvShowsReducer = (state = { dtvshows: [] }, action) => {
   switch (action.type) {
      case DISCOVER_TV_REQUEST:
         return { loading: true };
      case DISCOVER_TV_SUCCESS:
         return {
            loading: false,
            dtvshows: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case DISCOVER_TV_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const airingTodayTvShowsReducer = (state = { atvshows: [] }, action) => {
   switch (action.type) {
      case AIRING_TODAY_TV_REQUEST:
         return { loading: true };
      case AIRING_TODAY_TV_SUCCESS:
         return {
            loading: false,
            atvshows: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case AIRING_TODAY_TV_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const onTvShowsReducer = (state = { onTvshows: [] }, action) => {
   switch (action.type) {
      case ON_TV_REQUEST:
         return { loading: true };
      case ON_TV_SUCCESS:
         return {
            loading: false,
            onTvshows: action.payload.results,
            page: action.payload.page,
            total_pages: action.payload.total_pages
         };
      case ON_TV_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const individualTvReducer = (state = { tv: {} }, action) => {
   switch (action.type) {
      case INDIVIDUAL_TV_REQUEST:
         return { loading: true };
      case INDIVIDUAL_TV_SUCCESS:
         return { loading: false, tv: action.payload };
      case INDIVIDUAL_TV_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const tvCastReducer = (state = { tvPeoples: [] }, action) => {
   switch (action.type) {
      case TV_CAST_REQUEST:
         return { loading: true };
      case TV_CAST_SUCCESS:
         return { loading: false, tvPeoples: action.payload };
      case TV_CAST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const tvVideosReducer = (state = { videos: [] }, action) => {
   switch (action.type) {
      case TV_VIDEOS_REQUEST:
         return { loading: true };
      case TV_VIDEOS_SUCCESS:
         return {
            loading: false,
            videos: action.payload.results,
            count: action.payload.results.length
         };
      case TV_VIDEOS_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const tvRecommendationsReducer = (state = { tvShows: [] }, action) => {
   switch (action.type) {
      case TV_RECOMMENDATION_REQUEST:
         return { loading: true };
      case TV_RECOMMENDATION_SUCCESS:
         return {
            loading: false,
            tvShows: action.payload.results,
            count: action.payload.results.length
         };
      case TV_RECOMMENDATION_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const tvSimilarsReducer = (state = { tvShows: [] }, action) => {
   switch (action.type) {
      case TV_SIMILAR_REQUEST:
         return { loading: true };
      case TV_SIMILAR_SUCCESS:
         return {
            loading: false,
            tvShows: action.payload.results,
            count: action.payload.results.length
         };
      case TV_SIMILAR_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const tvReviewsReducer = (state = { reviews: [] }, action) => {
   switch (action.type) {
      case TV_REVIEW_REQUEST:
         return { loading: true };
      case TV_REVIEW_SUCCESS:
         return {
            loading: false,
            reviews: action.payload.results,
            count: action.payload.results.length
         };
      case TV_REVIEW_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
