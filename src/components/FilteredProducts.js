import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchFilteredDATA from "../redux/filteredProducts/filteredAction";
import { useParams } from "react-router-dom";
import Product from "./shared/Product";
import SkeletonContainer from "./SkeletonContainer";

import styled from "styled-components";

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

const FilteredProducts = () => {
  const { filtered } = useParams();
  const data = useSelector((state) => state.filteredState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilteredDATA(filtered));

    console.log(typeof filtered);
  }, []);

  return (
    <>
      {!data.filteredItems.length ? (
        <SkeletonContainer />
      ) : (
        <Div>
          {data.filteredItems.map((item) => (
            <Product data={item} key={item.id} />
          ))}
        </Div>
      )}
    </>
  );
};

export default FilteredProducts;
