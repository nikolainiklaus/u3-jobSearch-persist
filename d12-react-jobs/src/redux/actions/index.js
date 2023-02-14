export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

// const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const addToFavouriteAction = (company) => ({
  type: ADD_TO_FAVOURITE,
  payload: company,
});

export const removeFromFavouriteAction = (company) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: company,
});

export const getJobsAction = (query) => {
  return async (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
      } else {
        alert("Error fetching results");
        dispatch({
          type: SET_LOADING,
          payload: false,
        });
        dispatch({
          type: SET_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: SET_LOADING,
        payload: false,
      });
      dispatch({
        type: SET_ERROR,
        payload: true,
      });
    }
  };
};
