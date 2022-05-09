import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//? Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//* Components
import Burger from "./components/Burger";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import AboutUs from "./components/AboutMe";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";
import Store from "./components/Store";
import Signup from "./components/Signup";
import Login from "./components/Login";
import FilteredProducts from "./components/FilteredProducts";

const App = () => {
  return (
    <>
      {navigator.onLine ? (
        <Provider store={store}>
          <div>
            <Burger />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Store />} />

              <Route
                path="/products/category/:filtered"
                element={<FilteredProducts />}
              />

              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/products/*" element={<Products />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<Navigate to="/notfound" />} />
            </Routes>
          </div>
        </Provider>
      ) : (
        <h2
          style={{
            textAlign: "center",
            width: "100vw",
            height: "100vh",
            lineHeight: "100vh",
            fontFamily: "sans-serif",
            color: "#bb0000",
            textShadow: "1px 1px 1.1px black",
            fontStyle: "italic",
          }}
        >
          Please Connect to Internet !
        </h2>
      )}
    </>
  );
};

export default App;
