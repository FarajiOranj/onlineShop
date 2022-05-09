import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/ProductDetails.module.css";
import { useTitle } from "./helpers/helper";

//* Components
import Loading from "./Loading";

const ProductDetails = () => {
  useTitle("Product Details");
  const { id } = useParams();
  const [data, setData] = useState({ isLoading: true });

  const getProducts = async () => {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  };

  useEffect(() => {
    const fetchApi = async () => {
      setData(await getProducts());
    };
    fetchApi();
  }, []);

  const { image, title, description, price, category, isLoading } = data;
  return (
    <>
      {!!isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="product" />
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}>
              <span>Category:</span> {category}
            </p>
            <div className={styles.buttonContainer}>
              <span className={styles.price}>{price} $</span>
              <Link to="/products">Back to Shop</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
