import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { shorten } from "./helpers/helper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Swiper.styles.css";

// required modules
import { Pagination, Navigation } from "swiper";

const SwiperLanding = ({ data }) => {
  return (
    <div className="swiperContained">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt="swiperItemImages" />
            </Link>
            <span>{shorten(item.title)}</span>
            <p>{item.price} $</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperLanding;
