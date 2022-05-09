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

  @media (max-width: 1600px) {
    .slider1SkeletonSwiper {
      display: none;
    }
  }

  @media (max-width: 1400px) {
    height: 215px;

    .sliderS {
      width: calc(17vw - 20px);
    }
  }

  @media (max-width: 1200px) {
    padding: 1% 8%;

    .slider2SkeletonSwiper {
      display: none;
    }
    height: 200px;

    .sliderS {
      width: calc(19vw - 20px);
    }
  }

  @media (max-width: 800px) {
    height: 190px;
    padding: 1% 8%;

    .sliderS {
      width: calc(20vw - 20px);
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    padding: 1% 4%;
    .slider3SkeletonSwiper {
      display: none;
    }

    .slider5SkeletonSwiper{
      width: fit-content;
    }


    .slider4SkeletonSwiper{
      width: fit-content;
      
    }

    .slider4SkeletonSwiper span {
     margin-left: 0;

    }

    .slider5SkeletonSwiper span {
     margin-left: 0;

    }

  }

  @media (max-width: 675px) {
    .sliderS {
      width: calc(24vw - 20px);
    }
  }

  @media (max-width: 600px) {
    padding: 1% 0;

    .sliderS {
      width: calc(24vw - 20px);
    }
  }

  @media (max-width: 555px) {
    .sliderS {
      width: calc(29vw - 20px);
    }
  }
  

  @media (max-width: 480px) {
    .slider4SkeletonSwiper {
      display: none;
      justify-content: center;
    }
    .slider5SkeletonSwiper{
      width: fit-content;
    }

    .slider5SkeletonSwiper span{
     margin-left: 0;
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
