import React from "react";
import styled from "styled-components";

import SkeletonTempSwiper from "./Templates/SkeletonTempSwiper";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  height: 225px;
  width: calc(85vw - 100px);
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 7px #c0c0c0;
  padding: 0 2%;

  .sliderS {
    margin-top: 1%;
    width: calc(15vw - 20px);

    text-align: center;
    margin-bottom: 1.5%;
  }

  @media (max-width: 1400px) {
    height: 215px;

    .sliderS {
      width: calc(17vw - 20px);
    }
  }

  @media (max-width: 1390px) {
    .slider1SkeletonSwiper {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    height: 200px;
    padding: 0 1.2%;

    .sliderS {
      width: calc(19vw - 20px);
    }
  }

  @media (max-width: 926px) {
    padding: 1% 8%;

    .slider2SkeletonSwiper {
      display: none;
    }
  }

  @media (max-width: 800px) {
    height: 190x;
    padding: 1% 8%;

    .sliderS {
      width: calc(20vw - 20px);
    }
  }

  @media (max-width: 695px) {
    justify-content: space-around;

  }

  @media (max-width: 675px) {
    .sliderS {
      width: calc(24vw - 20px);
    }
  }

  @media (max-width: 600px) {
    .sliderS {
      width: calc(24vw - 20px);
    }
  }

  @media (max-width: 570px) {
    .sliderS {
      width: calc(24vw - 20px);
    }
  }

  @media (max-width: 800px) {
    height: 200px;
    width: calc(70vw);
  }

  @media (max-width: 695px) {
    .slider3SkeletonSwiper {
      display: none;
    }
  }
`;

const SkeletonSwiperContainer = () => {
  return (
    <Div>
      <div className="slider1SkeletonSwiper sliderS">
        <SkeletonTempSwiper />
      </div>
      <div className="slider2SkeletonSwiper sliderS">
        <SkeletonTempSwiper />
      </div>
      <div className="slider3SkeletonSwiper sliderS">
        <SkeletonTempSwiper />
      </div>
      <div className="slider4SkeletonSwiper sliderS">
        <SkeletonTempSwiper />
      </div>
      <div className="slider5SkeletonSwiper sliderS">
        <SkeletonTempSwiper />
      </div>
    </Div>
  );
};

export default SkeletonSwiperContainer;
