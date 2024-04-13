import { useSelector } from "react-redux";
import CardHome from "../cardHome/cardHome.component";
import CardHomeHover from "../cardHomeHover/cardHomeHover.component";
import LoadingSpinner from "../loadingSpinner/loadingSpinner.component";

import { SliderContainer } from "./slider.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = () => {
  const { products, isLoading } = useSelector((store) => store.cart);
  const categories = products.filter(
    (item) => item.type === "specials" || item.type === "donuts"
  );

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
                spaceBetween: 0,
                slidesPerView: 1,
              },
              576: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              786: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              992: {
                spaceBetween: 20,
                slidesPerView: 4,
              },
              1200: {
                spaceBetween: 30,
                slidesPerView: 4,
              },
            }}
          >
            {categories.map((product) => (
              <SwiperSlide key={product._id}>
                {window.innerWidth <= 1200 ? (
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
      )}
    </>
  );
};

export default Slider;
