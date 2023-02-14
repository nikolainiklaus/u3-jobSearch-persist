import { GET_JOBS, SET_LOADING } from "../actions";

const initialState = {
  results: [],
  isLoading: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
