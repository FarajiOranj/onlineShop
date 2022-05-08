import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Img
import ShopIcon from "../images/shopping-cart.png";

const ItemCounter = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        position: "relative",
      }}
    >
      <Link to="/cart">
        <img
          style={{ width: "36px", height: "36px" }}
          src={ShopIcon}
          alt="shop-cart"
        />
      </Link>

      <span
        style={{
          display: "block",
          width: "14px",
          height: "14px",
          textAlign: "center",
          alignSelf: "center",
          lineHeight: "15px",
          backgroundColor: "#34568B",
          color: "#f3f9f9",
          borderRadius: "40%",
          padding: ".25px",
          position: "absolute",
          top: "4px",
          right: "4px",
        }}
      >
        {state.itemsCounter}
      </span>
    </div>
  );
};

export default ItemCounter;
