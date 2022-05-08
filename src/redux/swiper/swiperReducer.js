const initLimit = {
  selectedItems: [],
  loading: false,
  error: "",
};

const swiperReducer = (state = initLimit, action) => {
  switch (action.type) {
    case "FETCH_RQ":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_DATA_SUCCESS":
      return {
        selectedItems: action.payload,
        loading: false,
      };

    case "FETCH_DATA_FAILURE":
      return {
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default swiperReducer;
