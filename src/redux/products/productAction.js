import axios from "axios";

const fetchProductDataReq = () => {
  return {
    type: "FETCH_PRODUCT_DATA_REQ",
  };
};

const fetchProductDataSuccess = (data) => {
  return {
    type: "FETCH_PRODUCT_DATA_SUCCESS",
    payload: data,
  };
};

const fetchProductDataFailure = (error) => {
  return {
    type: "FETCH_PRODUCT_DATA_Failure",
    payload: error,
  };
};

const fetchProductData = () => {
  return (dispatch) => {
    dispatch(fetchProductDataReq());
    axios
      .get("/products")
      .then((response) => dispatch(fetchProductDataSuccess(response.data)))
      .catch((error) => dispatch(fetchProductDataFailure(error.message)));
  };
};

export default fetchProductData;
