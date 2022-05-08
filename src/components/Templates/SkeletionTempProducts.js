//* Skeleton Template
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Styles
import "../../styles/SkeletonProduct.css";

const SkeletonTempProducts = () => {
  return (
    <div className="containerSkeleton">
      <SkeletonTheme baseColor="#f9f9f9">
        <Skeleton className="cardImage" />

        <Skeleton className="title" />

        <Skeleton className="price" />
       
          <Skeleton className="linkSkelet" inline />

          <Skeleton className="buttonAdd" inline />
        
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonTempProducts;
