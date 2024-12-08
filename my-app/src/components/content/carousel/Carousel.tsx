import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <div style={{ maxWidth: "100%", height: "300px", margin: "0 auto" }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="/images/1.webp"
            alt="Image 1"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/2.webp"
            alt="Image 2"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/3.webp"
            alt="Image 3"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
