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
          1600: { slidesPerView: 5, spaceBetween: 20 },
          1200: { slidesPerView: 4, spaceBetween: 10 },
          1000: { slidesPerView: 3, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 3 },
          480: { slidesPerView: 2, spaceBetween: 1 },
          400: { slidesPerView: 1, spaceBetween: 3 },
          300: { slidesPerView: 1, spaceBetween: 1 },
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
