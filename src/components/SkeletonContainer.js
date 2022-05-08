import React from "react";
import styled from "styled-components";

//* Product Skeleton Template
import SkeletonTempProducts from "../components/Templates/SkeletionTempProducts";

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

const SkeletonContainer = () => {
  return (
    <Div>
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
      <SkeletonTempProducts />
    </Div>
  );
};

export default SkeletonContainer;
