const initProducts = {
  products: [],
  loading: false,
  error: "",
};

const productsReducer = (state = initProducts, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_DATA_REQ":
      return { ...state, loading: true };

    case "FETCH_PRODUCT_DATA_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };

    case "FETCH_PRODUCT_DATA_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
