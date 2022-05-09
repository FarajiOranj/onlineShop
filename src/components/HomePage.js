/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fetchDATA from "../redux/swiper/swiperAction";
import { useTitle } from "./helpers/helper";

// styles & Img
import styles from "../styles/HomePage.module.css";
import shopBanner from "../images/shopBanner.png";
import jewelery from "../images/jewelery-100.svg";
import electronic from "../images/electronics-100.svg";
import wClothing from "../images/wDress-100.svg";
import mClothing from "../images/mSuit-100.svg";

//* Components
import SwiperLanding from "./SwiperLanding";
import SkeletonSwiperContainer from "./SkeletonSwiperContainer";

const HomePage = () => {
  useTitle("HomePage");
  const data = useSelector((state) => state.swiperState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.selectedItems.length) dispatch(fetchDATA(9));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Link to="/products">
          <img
            className={styles.landingBanner}
            src={shopBanner}
            alt="landingBanner"
          />
        </Link>
      </div>
      <div className={styles.filteredContainer}>
        <div className={styles.categoryContainer}>
          <Link to="/products/category/women's clothing">
            <img src={wClothing} alt="womensClothingCategory" />
          </Link>
          <p>Women's Clothing</p>
        </div>
        <div className={styles.categoryContainer}>
          <Link to="/products/category/jewelery">
            <img src={jewelery} alt="jeweleryCategory" />
          </Link>
          <p>jewelery</p>
        </div>
        <div className={styles.categoryContainer}>
          <Link to="/products/category/men's clothing">
            <img src={mClothing} alt="mensClothingCategory" />
          </Link>
          <p>Men's Clothing</p>
        </div>
        <div className={styles.categoryContainer}>
          <Link to="/products/category/electronics">
            <img src={electronic} alt="electronicsCategory" />
          </Link>
          <p>Electronics</p>
        </div>
      </div>
      <div className={styles.swiperFavContainer}>
        <h2 className={styles.swiperContentHeader}>Most Favorites</h2>

        {data.loading ? (
          <SkeletonSwiperContainer />
        ) : (
          <SwiperLanding data={data.selectedItems} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
