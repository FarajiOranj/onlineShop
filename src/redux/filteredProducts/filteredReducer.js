const initValue = {
  filteredItems: [],
  isLoading: false,
  error: "",
};

const filteredReducer = (state = initValue, action) => {
  switch (action.type) {
    case "FETCH_DATA_RQ":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_FILTERED_DATA_SUCCESS":
      return {
        isLoading: false,
        filteredItems: action.payload,
      };

      case "FETCH_FILTERED_DATA_FAILURE":
      return {
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filteredReducer;
