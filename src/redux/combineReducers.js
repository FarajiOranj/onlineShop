import { combineReducers } from "redux";

//* Reducers
import cartReducer from "./cartCounter/cartReducer";
import productsReducer from "./products/productReducers";
import swiperReducer from "./swiper/swiperReducer";
import FilteredReducer from "./filteredProducts/filteredReducer";

//! State Manager
const combinedReducers = combineReducers({
  productState: productsReducer,
  cartState: cartReducer,
  filteredState: FilteredReducer,
  swiperState: swiperReducer,
});

export default combinedReducers;
