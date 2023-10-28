import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import image from '../images/img-home.jpg'
import '../Style/Product.css'

export default function App() {
  const images = [
    'https://picsum.photos/id/10/2500/1667',
    'https://picsum.photos/id/11/2500/1667',
    'https://picsum.photos/id/12/2500/1667',
    'https://picsum.photos/id/13/2500/1667',
    'https://picsum.photos/id/14/2500/1667',
    'https://picsum.photos/id/15/2500/1667',
    'https://picsum.photos/id/16/2500/1667',
    'https://picsum.photos/id/17/2500/1667',
    'https://picsum.photos/id/18/2500/1667',
  ];

  return (
    <div className='img' style={{ backgroundImage: `url(${image})` }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false}}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className='img1' src={image} alt={`Image ${index + 1}`}  width='1000' height='500'/>
          </SwiperSlide>
         ))}
      </Swiper>
    </div>
  );
}
