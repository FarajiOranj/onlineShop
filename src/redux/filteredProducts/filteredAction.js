import axios from "axios";

const fetchFilteredDataRQ = () => {
  return { type: "FETCH_FILTERED_DATA_RQ" };
};

const fetchFilteredDataSuccess = (data) => {
  return {
    type: "FETCH_FILTERED_DATA_SUCCESS",
    payload: data,
  };
};

const fetchFilteredDataFailure = (data) => {
  return {
    type: "FETCH_FILTERED_DATA_FAILURE",
    payload: data,
  };
};

const fetchFilteredDATA = (filter) => {
  return (dispatch) => {
    dispatch(fetchFilteredDataRQ());
    axios
      .get(`/products/category/${filter}`)
      .then((response) => {
        dispatch(fetchFilteredDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFilteredDataFailure(error.message));
      });
  };
};

export default fetchFilteredDATA;
