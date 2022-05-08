import axios from "axios";

const fetchRQ = () => {
  return {
    type: "FETCH_RQ",
  };
};

const fetchSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: data,
  };
};

const fetchFailure = (error) => {
  return {
    type: "FETCH_DATA_FAILURE",
    payload: error,
  };
};

const fetchDATA = (limit) => {
  return (dispatch) => {
    dispatch(fetchRQ());
    axios
      .get(`/products?limit=${limit}`)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchFailure(error.message)));
  };
};

export default fetchDATA;
