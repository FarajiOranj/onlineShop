import React from "react";
import "../../styles/SkeletonTempSwiper.css";

//* Skeleton Template
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Styles
import "../../styles/SkeletonProduct.css";

const SkeletonTempSwiper = () => {
  return (
    
      <div className="swiperSkeletonSlider" >
        <SkeletonTheme>
          <Skeleton className="swiperImgSkeleton" width={115}/>
          <Skeleton className="swiperTitleSkeleton" width={100} />
          <Skeleton className="swiperPriceSkeleton" width={60} />
        </SkeletonTheme>
      </div>
  );
};

export default SkeletonTempSwiper;
