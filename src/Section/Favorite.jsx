


import React from 'react'
import fImg1 from '../assets/Img/favorite-1.png'
import fImg2 from '../assets/Img/favorite-2.png'
import fImg3 from '../assets/Img/favorite-3.png'
import fImg4 from '../assets/Img/favorite-4.png'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Favorite = () => {
  return (
    <>
    <section className="favorite section" id="favorite">
        <h2 className="section-title">
            CHOOSE YOUR FAVORITE
        </h2>

        <div className="favorite-container">
            <div className="favorite-swiper">
            <Swiper
            loop={'true'}
            sliderPerView={'auto'}
            centeredSlides={'auto'}
            grabCursor={true}
            breakpoints={{768:{
                sliderPerView:3,
            }}}
      spaceBetween={190}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <article className='favorite-article'>
     <img src={fImg1} alt="" className="favorite-img" />
        <span className="favorite-model">Black Model</span>
         </article>
      </SwiperSlide>
      <SwiperSlide>
      <article className='favorite-article'>
         <img src={fImg2} alt="" className="favorite-img" />
         <span className="favorite-model">White Model</span>
         </article>
      </SwiperSlide>
      <SwiperSlide>
      <article className='favorite-article'>
         <img src={fImg3} alt="" className="favorite-img" />
          <span className="favorite-model">Red Model</span>
          </article>
      </SwiperSlide>
      <SwiperSlide>
      <article className='favorite-article'>
                        <img src={fImg4} alt="" className="favorite-img" />
                        <span className="favorite-model">Teal Model</span>
                    </article>
      </SwiperSlide>
    </Swiper>
            </div>
        </div>

   
    </section>
    </>
  )
}

export default Favorite