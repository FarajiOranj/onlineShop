import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

//! Reset Styles
import "./styles/reset-styles.css";

//* Components
import App from "./App";


//? Base URL Set
axios.defaults.baseURL = "https://fakestoreapi.com"

// eslint-disable-next-line
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
