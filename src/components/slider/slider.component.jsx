import { useSelector } from "react-redux";
import CardHome from "../cardHome/cardHome.component";
import { SliderContainer } from "./slider.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardHomeHover from "../cardHomeHover/cardHomeHover.component";

const Slider = () => {
  const { products } = useSelector((store) => store.cart);
  const categories = products.filter(
    (item) => item.type === "specials" || item.type === "donuts"
  );

  return (
    <SliderContainer>
      <Swiper
        className="swiperReviews mySwiper"
        loop={true}
        modules={[Navigation]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
          },
          576: {
            width: 576,
            slidesPerView: 2.5,
          },
          768: {
            width: 768,
            slidesPerView: 3.6,
          },
          992: {
            width: 992,
            slidesPerView: 4.6,
          },
          1200: {
            width: 1200,
            slidesPerView: 4.7,
          },
          1540: {
            width: 1540,
            slidesPerView: 4.9,
          },
        }}
      >
        {categories.map((product) => (
          <SwiperSlide key={product._id}>
            {window.innerWidth <= 576 ? (
              <CardHomeHover product={product} />
            ) : (
              <CardHome product={product} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prev">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>

      <div className="next">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </SliderContainer>
  );
};

export default Slider;
