import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Styles
import styles from "../styles/Store.module.css";

//* Components
import SelectedItems from "./Cart";

//! Dispatchers
import { clear, checkout } from "../redux/cartCounter/cartAction";

const Store = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <SelectedItems key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total Items:</span> {state.itemsCounter}
          </p>
          <p>
            <span>Total Payments:</span> {state.total} $
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {state.itemsCounter === 0 && !state.isChecked && (
        <div className={styles.complete}>
          <h3>Want to buy?</h3>
          <Link to="/products">Go to shop</Link>
        </div>
      )}
      {state.itemsCounter === 0 && state.isChecked && (
        <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to="/products">Buy More</Link>
        </div>
      )}
    </div>
  );
};

export default Store;
