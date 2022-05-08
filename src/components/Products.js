/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

//* Components
import Product from "./shared/Product";
import SkeletonContainer from "./SkeletonContainer";

//? DataGrabber (a Full Reducer)
import fetchProductData from "../redux/products/productAction";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 0 150px;

  @media (max-width: 1200px) {
    padding: 15px 80px;
    margin-top: 55px;
  }

  @media (max-width: 768px) {
    margin-top: 90px;
    padding: 15px 40px;
  }

  @media (max-width: 555px) {
    justify-content: center;
    padding: 15px 10px;
  }
`;
const Products = () => {
  const data = useSelector((state) => state.productState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.products.length) setTimeout(()=> dispatch(fetchProductData()),100) ;
  }, []);
  return (
    <>
      {data.loading ? (
        <SkeletonContainer />
      ) : data.error ? (
        <p>{data.error}</p>
      ) : (
        <Div>
          {data.products.map((item) => (
            <Product data={item} key={item.id} />
          ))}
        </Div>
      )}
    </>
  );
};

export default Products;
