'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';



// Import required modules
import { EffectCube,Autoplay, FreeMode} from 'swiper/modules';

const SwiperComponent: React.FC = () => {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCube, Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Entrata.webp" alt="Entrata"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Parallax.webp" alt="Parallax" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Nature 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Nature 4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperComponent;
