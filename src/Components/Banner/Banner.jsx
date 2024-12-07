import slider1 from "../../assets/banner2.jpg";
import slider2 from "../../assets/banner1.jpg";
import slider3 from "../../assets/banner3.jpg";
import slider4 from "../../assets/banner4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const Banner = () => {
  return (
    <div className="mb-8">
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
    <SwiperSlide>
        <img
          src={slider1}
          alt="Slide 1"
          className="w-full h-[600px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          alt="Slide 2"
          className="w-full h-[600px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          alt="Slide 3"
          className="w-full h-[600px] object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider4}
          alt="Slide 4"
          className="w-full h-[600px] object-cover"
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Banner;
