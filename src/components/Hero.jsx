import React from 'react'

import heroimg from './images/BG.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './styles/Swiperjs.css';

import dev from './images/logo/dev.PNG'
import green from './images/logo/green.PNG'
import smart from './images/logo/smart.PNG'
import clean from './images/logo/clean.PNG'
import culture from './images/logo/culture.PNG'
import doctor from './images/logo/doctor.PNG'
import women from './images/logo/women.PNG'
import flood from './images/logo/flood.PNG'
import sport from './images/logo/sport.PNG'
import blood from './images/logo/blood.PNG'
import asptree from './images/asptree.png'

import './styles/Hero.css'

function Hero() {
  
  return (
    <>
    <div className='herodiv hidden sm:block px-[10rem] h-[140vh]'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1000,
            ease: 'easeOut',
            disableOnInteraction: false,
          }}

          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={asptree} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              फाउंडेशन
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
              <img src={green} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              ग्रीन वाघोली
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={smart} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              स्मार्ट वाघोली
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={clean} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              क्लीन वाघोली 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={culture} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              सांस्कृतिक 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={doctor} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              आरोग्य
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div  className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={women} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              महिला
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={flood} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              पूरग्रस्तांना मदत
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={sport} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              क्रीडा 
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={blood} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              रक्तदान
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-xl shadow-lg bg-slate-100 flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-2'>
            <div>
              <div className='flex items-center justify-center text-5xl'>
                <img src={dev} alt="" />
              </div>
              <div className='flex items-bottom justify-center text-base font-semibold'>
              विकास कामे
              </div>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
    </div>
    <div className='sm:hidden'>
      <img className='w-full h-[30rem]' src={heroimg} alt="" />
    </div>
    </>
  )
}

export default Hero