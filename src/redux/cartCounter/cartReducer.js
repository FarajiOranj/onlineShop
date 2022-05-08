const initCart = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  isChecked: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);

  return { itemsCounter, total };
};

let cartReducer = (state = initCart, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        isChecked: false,
      };

    case "REMOVE_ITEM":
      const newState = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newState],
        ...sumItems(newState),
      };

    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;

      return { ...state, ...sumItems(state.selectedItems) };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;

      return { ...state, ...sumItems(state.selectedItems) };

    case "CHECKOUT":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        isChecked: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        isChecked: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
