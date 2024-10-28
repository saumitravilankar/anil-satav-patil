import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
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

import a1 from './images/servicepics/a1.PNG'
import a2 from './images/servicepics/a2.PNG'
import a3 from './images/servicepics/a3.PNG'
import a7 from './images/servicepics/a7.PNG'
import a8 from './images/servicepics/a8.PNG'
import a9 from './images/servicepics/a9.PNG'
import a10 from './images/servicepics/a10.PNG'
import a11 from './images/servicepics/a11.PNG'
import a12 from './images/servicepics/a12.PNG'
import a13 from './images/servicepics/a13.PNG'
import a14 from './images/servicepics/a14.PNG'
import a15 from './images/servicepics/a15.PNG'
import a17 from './images/servicepics/a17.PNG'
import a18 from './images/servicepics/a18.PNG'
import a19 from './images/servicepics/a19.PNG'
import a20 from './images/servicepics/a20.PNG'
import a21 from './images/servicepics/a21.PNG'
import a22 from './images/servicepics/a22.PNG'
import a23 from './images/servicepics/a23.PNG'
import a24 from './images/servicepics/a24.PNG'
import a25 from './images/servicepics/a25.PNG'
import a26 from './images/servicepics/a26.PNG'
import a27 from './images/servicepics/a27.PNG'
import a28 from './images/servicepics/a28.PNG'
import a29 from './images/servicepics/a29.PNG'
import a30 from './images/servicepics/a30.PNG'
import a31 from './images/servicepics/a31.PNG'
import a32 from './images/servicepics/a32.PNG'
import a33 from './images/servicepics/a33.PNG'
import a34 from './images/servicepics/a34.PNG'
import a35 from './images/servicepics/a35.PNG'

export default function Swiperjs() {

    const [content, setcontent] = useState({
        heading : "स्वखर्चातून केलेली कामे",
        content_one : "अनिल सातव पाटील फाऊंडेशन मार्फत विविध रस्ते दुरुस्ती, विविध भागात स्ट्रीट लाईट, लोकांसाठी मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड इ. प्रकारचे डॉक्युमेंटेशनचे १५५ पेक्षा अधिक कॅम्प तसेच आरोग्य कॅम्प, वृक्षलागवड- वृक्षसंगोपन, धार्मिक सेवाकार्य, आपत्कालीन परिस्थितीमध्ये मदतकार्य याद्वारे आजवर 35 हजारपेक्षा अधिक लोकांना लाभ मिळाला आहे.",
        content_two : "विविध रस्ते, पिण्याच्या पाण्याची पाईपलाईन, सांडपाणी(ड्रेनेज), पथदिवे(स्ट्रीटलाईट्स), बांधकाम, सुशोभीकरण, सुरक्षा इ. विकासकामे व सार्वजनिक उपक्रम अशी सन 2018 ते जून 2021 या अडीच वर्षाच्या काळात तब्बल 30 कोटी 42 लाख 61 हजार 285 रुपयांची विकासकामे करण्यात आली आहेत.",
        img1: a1,
        img2: a2,
        img3: a3,
      });
      const mainContent = ()=> {
        setcontent({
          heading : "स्वखर्चातून केलेली कामे", 
          content_one : "अनिल सातव पाटील फाऊंडेशन मार्फत विविध रस्ते दुरुस्ती, विविध भागात स्ट्रीट लाईट, लोकांसाठी मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड इ. प्रकारचे डॉक्युमेंटेशनचे १५५ पेक्षा अधिक कॅम्प तसेच आरोग्य कॅम्प, वृक्षलागवड- वृक्षसंगोपन, धार्मिक सेवाकार्य, आपत्कालीन परिस्थितीमध्ये मदतकार्य याद्वारे आजवर 35 हजारपेक्षा अधिक लोकांना लाभ मिळाला आहे.",
          content_two : "विविध रस्ते, पिण्याच्या पाण्याची पाईपलाईन, सांडपाणी(ड्रेनेज), पथदिवे(स्ट्रीटलाईट्स), बांधकाम, सुशोभीकरण, सुरक्षा इ. विकासकामे व सार्वजनिक उपक्रम अशी सन 2018 ते जून 2021 या अडीच वर्षाच्या काळात तब्बल 30 कोटी 42 लाख 61 हजार 285 रुपयांची विकासकामे करण्यात आली आहेत.",
          img1: a1,
          img2: a2,
          img3: a3,
        })
      };
      const greenContent = ()=> {
        setcontent({
          heading : "ग्रीन वाघोली",
          content_one : "मागील पाच वर्षात दरवर्षी पावसाळा सुरू होण्याआधी डोंगर टेकड्या, वाघोलीतील सार्वजनिक ठिकाणे, शाळा, मंदिर परिसर तसेच रस्ते व सोसायटी परिसरातील अ‍ॅमेनिटी स्पेस रस्ते इ. भागात आतापर्यंत १० हजार पेक्षा अधिक वृक्षलागवड करण्यात आलेली आहे.",
          content_two : "यामुळे पर्यावरणाचा समतोल राखला जाण्यास मोठा फायदा होणार असून असे विविध उपक्रम वाघोलीमध्ये राबवून ग्रीन वाघोली करण्यात हातभार लावला आहे",
          img1: a7,
          img2: a8,
          img3: a9,
        })
      }
      const smartContent = ()=> {
        setcontent({
          heading : "स्मार्ट वाघोली/ डिजिटल वाघोली ",
          content_one : "मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड, मतदान नावनोंदणी अभियान कॅम्प राबविण्यात आले. सन २०१६ पासून वाघोली परिसरात आधार कार्ड, पॅन कार्ड, रेशन कार्ड व इतर नागरी सुविधांसाठी मोफत १५५ पेक्षा अधिक कॅम्प वाड्या, वस्त्या, सोसायट्या इत्यादी भागात अनिल भाऊ सातव पाटील फाऊंडेशनच्या माध्यमातून राबविण्यात आले आहेत.",
          content_two : "",
          img1: a10,
          img2: a11,
          img3: a12,
        })
      }
      const cleanContent = ()=> {
        setcontent({
          heading : "क्लीन वाघोली",
          content_one : "ग्राम स्वच्छता अभियानाच्या प्रेरणेतून वाघोलीतील विविध सार्वजनिक ठिकाणी स्वच्छता अभियान राबविण्यात येत आहे.",
          content_two : "महाराष्ट्रातील सर्वात मोठा वारकरी सोहळा संत तुकाराम महाराज व संत ज्ञानेश्वर माऊली यांच्या पायी वारीत विविध ठिकाणी सामील होऊन स्वछता अभियान राबविण्यात येते.",
          img1: a14,
          img2: a13,
          img3: a15,
        })
      }
      const cultureContent = ()=> {
        setcontent({
          heading : "सांस्कृतिक उपक्रम",
          content_one : "अनिल भाऊ सातव पाटिल फाऊंडेशनच्या माध्यमातून दरवर्षी जगदगुरू संत तुकाराम महाराज व संत ज्ञानेश्वर महाराज पायी वारी पालखी सोहळा तसेच शिर्डी साईबाबा पालखी सोहळा वाघोलीतील दिंडी सोहळा व धार्मिक स्थळांच्या ठिकाणी सेवेचे उपक्रम विविध धार्मिक स्थळांच्या ठिकाणी देवदर्शन यात्रा धार्मिक कार्यक्रमाच्या वेळी देखील सर्वतोपरी मदतकार्य करण्यात येते.",
          content_two : "",
          img1: a17,
          img2: a18,
          img3: a19,
        })
      }
      const doctorContent = ()=> {
        setcontent({
          heading : "मोफत हेल्थ चेकप कॅम्प",
          content_one : "मागील काही वर्षांपासून अनिल भाऊ सातव पाटिल फाऊंडेशनच्या माध्यमातून आरोग्याच्या दृष्टीने नागरिकांना लाभ व्हावा या अनुषंगाने वाघोली परिसरात विविध प्रकारचे हेल्थ कॅम्प आयोजित केले जातात. त्यामध्ये मोफत ब्लड, शुगर, कान, नाक, डोळे, ब्लडप्रेशर तपासणी इत्यादी प्रकारच्या तपासण्या करण्यासाठी मोफत कॅम्प लावले जातात.",
          content_two : "",
          img1: a20,
          img2: a21,
          img3: a22,
        })
      }
      const womenContent = ()=> {
        setcontent({
          heading : "महिला सशक्तीकरण",
          content_one : "'यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता' अर्थात जेथे नारीची (स्त्रीची) पूजा केली जाते तेथे देवाचे स्थान असते या उक्तीप्रमाणे वाघोलीतील महिलांना मोफत चारचाकी वाहन शिकवणे, ब्युटीपार्लर, शिवणकाम इ. उपक्रम राबवत महिला सक्षमीकरणावर भर देण्यात आलेला आहे.",
          content_two : "स्थानिक महिला सक्षमीकरण व सबलीकरण हे मुख्य उद्दिष्ट ठेऊन अनिल सातव पाटिल फाऊंडेशन व वाघोली वुमेन्स क्लबच्या वतीने दिवाळी शॉपिंग फुड व मेगा फन कार्निवलमध्ये ६० पेक्षा अधिक शॉपिंग व फुड स्टॉल लावून आपल्या भागातील आणि एकूणच पूर्व पुण्यातील नागरिकांना दिवाळीच्या सहकुटुंब खरेदीच्या परिपूर्ण अनुभवासाठी आणि त्याचसोबत बचतगट, गृहउद्योग चालवणाऱ्या वाघोली खराडीतील महिलांना उत्पन्नाचे साधन उपलब्ध करून दिले. वाघोली-खराडी परिसरातील ९००० पेक्षा अधिक नागरिकांनी भेट दिली.",
          img1: a23,
        })
      }
      const floodContent = ()=> {
        setcontent({
          heading : "पूरग्रस्तांना मदत",
          content_one : "सांगली, सातारा, कोल्हापूर येथे २ वर्षांपूर्वी आलेल्या महापुराच्या समयी आपत्कालीन परिस्थितीत पूरग्रस्तांना मदत करण्यासाठी अनिल भाऊ सातव पाटील फाऊंडेशनच्या माध्यमातून १ हजार लोकांना पुरतील एवढ्या जीवनावश्यक वस्तूंच्या किटचे वाटप करण्यात आले होते. त्यात खाण्यापिण्याच्या वस्तू, कपडे, गोळ्या, औषधे, पाणी इ. प्रकारच्या वस्तूंचा समावेश होता. ",
          content_two : "अशा प्रकारे फाऊंडेशनतर्फे तातडीने पूरग्रस्त भागात जाऊन मदत पुरविण्यासाठी पुढाकार घेऊन समाजहित जपले गेले.",
          img1: a24,
          img2: a25,
          img3: a26,
        })
      }
      const sportContent = ()=> {
        setcontent({
          heading : "स्पोर्ट अ‍ॅक्टिव्हिटी",
          content_one : "अनिल सातव पाटिल फाउंडेशनचा माध्यमातुन जिल्हास्तरीय कबड्डी स्पर्धा, रांगोळी स्पर्धा, चित्रकला स्पर्धा तसेच भव्य किल्ले स्पर्धा, क्रिकेट स्पर्धा इत्यादी खेळण्याच्या स्पर्धा सातत्याने भरवण्यात येतात.",
          content_two : "",
          img1: a27,
          img2: a28,
          img3: a29,
        })
      }
      const bloodContent = ()=> {
        setcontent({
          heading : "ब्लड कॅम्प(रक्तदान शिबिरे)",
          content_one : "आतापर्यंत अनिल भाऊ सातव पाटिल फाऊंडेशनच्या माध्यमातून मागील पाच वर्षात पुणे वाघोली परिसरात 20 पेक्षा अधिक रक्तदान शिबिरांचे आयोजन करण्यात आले आहे. ",
          content_two : "रक्तदान शिबिरांचे आयोजन करून समाजोपयोगी कामात मदत करण्यासाठी नेहमी सज्ज राहण्याचे काम फाऊंडेशनमार्फत केले जाते.",
          img1: a30,
          img2: a31,
          img3: a32,
        })
      }
      const devContent = ()=> {
        setcontent({
          heading : "सार्वजनिक विकासकामे",
          content_one : "ग्रामपंचायत वाघोली मार्फत कार्यकारिणी सन २०१८ ते जून २०२१ या कालावधीत पुर्ण गावामध्ये सर्व वार्डमध्ये सामायिक निधीतुन एकूण रस्ते, पाणी, ड्रेनेज लाईन, लाईट्स, बांधकाम, सुशोभीकरण, सुरक्षा इ. अशी तब्बल 108 कोटी 22 लाख 61 हजार 710 रुपयांची मोठ्या प्रमाणावर व विक्रमी स्वरूपाची कामे केलेली आहेत.",
          content_two : '',
          img1: a33,
          img2: a34,
          img3: a35,
        })
      }

  return (
    <>
    <div id='swipercarousel' className='sm:h-[120vh]'>
      <div id='service' className='text-center text-xl sm:text-4xl sm:pt-20 pt-10 pb-6 sm:pb-14 text-white'>
          सामाजिक कार्ये
      </div>
      
      <div className='sm:hidden '>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='py-4 mx-4'
          >
          <SwiperSlide>
            <div onClick={mainContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={greenContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={smartContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={cleanContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={cultureContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={doctorContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={womenContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={floodContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={sportContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={bloodContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={devContent} className='bg-white rounded-xl shadow-2xl flex items-center justify-center w-[120px] h-[140px] cursor-pointer my-10'>
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

          <div className='px-4'>
            <div className='text-center text-xl text-white mt-4 py-4'>
                {content.heading}
            </div>
            <div className='rounded-xl text-justify px-4 py-4 bg-slate-100 mt-4 font-nunito'>
                {content.content_one}
                {content.content_two}
            </div>
            <div className='py-4'>
              <div className='flex justify-center px-4'>
                  <img className='rounded-xl border-slate-500 border-2' src={content.img1} alt="" />
              </div>
              <div className='flex justify-center py-4 gap-2'>
                <div>
                  <img className='rounded-xl border-slate-500 border-2' src={content.img2} alt="" />
                </div>
                <div>
                  <img className='rounded-xl border-slate-500 border-2' src={content.img3} alt="" />
                </div>
              </div>
            </div>
          </div>

      </div>

      <div className='hidden sm:block px-40'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={8}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
          <SwiperSlide>
            <div onClick={mainContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={greenContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={smartContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={cleanContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={cultureContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={doctorContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={womenContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={floodContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={sportContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={bloodContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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
            <div onClick={devContent} className='rounded-xl shadow-lg bg-white flex items-center justify-center w-[140px] h-[140px] cursor-pointer my-10'>
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

      <div className='hidden sm:block ml-[3rem]'>
          <div className='grid grid-cols-2 items-center'>
            <div className='px-[4rem]'>
              <div className='text-center py-8 text-xl font-semibold shadow-xl rounded-xl bg-slate-100'>
                {content.heading}
              </div>
              <div className='text-justify mt-6 p-10 rounded-xl bg-white shadow-xl '>
                {content.content_one}
                {content.content_two}
              </div>
            </div>
            <div className=''>
              <div className='flex justify-center py-2'>
                  <img className='w-[30vw] h-[30vh] rounded-xl border-2 border-slate-500' src={content.img1} alt="" />
              </div>
              <div className='flex justify-center gap-2 ml-10'>
              {
                content.img2 ? <img className='w-[20vw] h-[25vh] rounded-xl border-2 border-slate-500' src={content.img2} alt="" /> : <div></div>
              }
              {
                content.img3 ? <img className='w-[20vw] h-[25vh] rounded-xl border-2 border-slate-500' src={content.img3} alt="" /> : <div></div>
              }
              </div>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}
