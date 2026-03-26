import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./slide-banner.css";

import img_2 from "../../assets/images/img02.jpg";
import img_3 from "../../assets/images/img03.jpg";
import img_4 from "../../assets/images/img04.jpg";

function SlideBanner() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src={img_4} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_2} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_3} alt="image" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SlideBanner;
