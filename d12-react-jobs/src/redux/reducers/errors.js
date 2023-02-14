import { SET_ERROR } from "../actions";

const initialState = {
  hasError: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        hasError: action.payload,
      };
    default:
      return state;
  }
};

export default errorReducer;
