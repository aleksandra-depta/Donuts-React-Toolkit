import { useSelector } from 'react-redux';
import CardHome from '../cardHome/cardHome.component';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slider = () => {

  const { products } = useSelector((store) => store.cart);
  const categories = products.filter((item) => 
    item.type === "specials" || item.type === "donuts"
  );

  return (
    <>
      <Swiper 
        className="swiperReviews mySwiper"
        // spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{

          576: {
            width: 576,
            slidesPerView: 2.2,
          },
          768: {
            width: 768,
            slidesPerView: 3.4,
          },
          992: {
            width: 992,
            slidesPerView: 4.3,
            spaceBetween: 10
          },
          1200: {
            width: 1200,
            slidesPerView: 4.4,
            spaceBetween: 10
          },
          1540: {
            width: 1540,
            slidesPerView: 4.5,
            spaceBetween: 10
          },
        }}
      >
        {categories.map( product => (
          <SwiperSlide key={ product._id } >
            <CardHome product={ product } />  
          </SwiperSlide>  
        ))}
      </Swiper>     
   </>
   )
}

export default Slider;
