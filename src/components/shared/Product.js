import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Styles & Img
import styles from "../../styles/Product.module.css";
import trashIcon from "../../images/trash.svg";

//! Dispatchers
import {
  increase,
  decrease,
  addItem,
  removeItem,
} from "../../redux/cartCounter/cartAction";

//? Services
import { shorten, isInCard, remover } from "../helpers/helper";

const Product = ({ data }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={data.image} alt={data.name} className={styles.cardImage} />
      <h3 style={{ userSelect: "text" }}>{shorten(data.title)}</h3>
      <p>{`${data.price} $`}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${data.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {remover(state, data.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() => dispatch(decrease(data))}
            >
              -
            </button>
          )}
          
          {remover(state, data.id) === 1 && (
            <button className={styles.smallButton} onClick={() => dispatch(removeItem(data))}>
              <img src={trashIcon} alt="trash_icon" />
            </button>
          )}
          {remover(state, data.id) > 0 && (
            <span className={styles.counter}>{remover(state, data.id)}</span>
          )}
          {isInCard(state, data.id) ? (
            <button className={styles.smallButton} onClick={() => dispatch(increase(data))}>
              +
            </button>
          ) : (
            <button onClick={() => dispatch(addItem(data))}>Add it</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
