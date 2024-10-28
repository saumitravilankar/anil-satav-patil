import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css';


import './styles/Videocarousel.css'

export default function Videocarousel() {
  return (
    <>
    <div id='carouseldiv' className='sm:flex justify-center items-top'>
        <div className='sm:w-[50%] py-10'>
            <div className='text-2xl sm:text-3xl text-center sm:text-start pb-5 sm:pb-10 sm:px-20 px-6'>
                अनिल भाऊ सातव पाटील यांच्या कार्यअहवालाचे व्हिडीओ स्वरूप:
            </div>
            <div className='px-6 sm:px-20'>
                <p className='text-center sm:text-start text-xl leading-loose'>
                    अनिल भाऊ सातव पाटील यांनी विविध सामाजिक आणि सांस्कृतिक उपक्रमांतून अनेक समाज उपयोगी आणि प्रगतशील कार्य केले आहे. स्वखर्चाने तसेच फाऊंडेशनच्या माध्यमातून सांस्कृतिक उपक्रम, स्वच्छता विषयक कामे, आरोग्य विषयक कामे, सामाजिक सुविधा, रस्ते, पाणी पुरवठा, भाजी मंडई समस्या इ. मोलाचे कार्य केले गेले. कोरोना काळातही समाजहितास्तव गरजूंसाठी विशेष आरोग्य सुविधा पुरवल्या गेल्या. देशातील सर्वात मोठा एक दिवसीय मोफत आधार कार्ड कॅम्प, मोफत सुकन्या समृद्धी योजना, पासबुक वितरण योजना, संघटनात्मक कार्य व आंदोलने यांच्या माध्यमातून प्रगतीची व समाज हिताची कार्ये केली गेली.
                </p>
            </div>
        </div>
        <div className='sm:w-[50%] py-10'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='py-4 mx-4'
            >
            <SwiperSlide >
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/PsC6XgbkmUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/f5klzAXoDLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/h8meGXhJqxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/VIf-DIlLbzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/tEzuoyIAKEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/XAZ_XefGZtc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center px-6 sm:px-0 py-10'>
                    <iframe width="560" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/c0CP9y7GeNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    </>
  )
}
