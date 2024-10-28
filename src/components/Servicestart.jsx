import React,{useState} from 'react'
import main from './images/logo/main.PNG'
import dev from './images/logo/dev.PNG'
import green from './images/logo/green.PNG'
import smart from './images/logo/smart.PNG'
import clean from './images/logo/clean.PNG'
import culture from './images/logo/culture.PNG'
import doc from './images/logo/doc.PNG'
import doctor from './images/logo/doctor.PNG'
import women from './images/logo/women.PNG'
import flood from './images/logo/flood.PNG'
import sport from './images/logo/sport.PNG'
import blood from './images/logo/blood.PNG'

import mainimage from './images/servicestart/mainimage.png'
import document from './images/servicestart/document.png'

export default function Servicestart() {

  const [content, setcontent] = useState({
    content_one : "अनिल सातव पाटील फाऊंडेशन मार्फत विविध रस्ते दुरुस्ती, विविध भागात स्ट्रीट लाईट, लोकांसाठी मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड इ. प्रकारचे डॉक्युमेंटेशनचे १५५ पेक्षा अधिक कॅम्प तसेच आरोग्य कॅम्प, वृक्षलागवड- वृक्षसंगोपन, धार्मिक सेवाकार्य, आपत्कालीन परिस्थितीमध्ये मदतकार्य याद्वारे आजवर 35 हजारपेक्षा अधिक लोकांना लाभ मिळाला आहे.",
    content_two : "विविध रस्ते, पिण्याच्या पाण्याची पाईपलाईन, सांडपाणी(ड्रेनेज), पथदिवे(स्ट्रीटलाईट्स), बांधकाम, सुशोभीकरण, सुरक्षा इ. विकासकामे व सार्वजनिक उपक्रम अशी सन 2018 ते जून 2021 या अडीच वर्षाच्या काळात तब्बल 30 कोटी 42 लाख 61 हजार 285 रुपयांची विकासकामे करण्यात आली आहेत.",
    img: mainimage
  });
  
  const mainContent = ()=> {
    setcontent({
      content_one : "अनिल सातव पाटील फाऊंडेशन मार्फत विविध रस्ते दुरुस्ती, विविध भागात स्ट्रीट लाईट, लोकांसाठी मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड इ. प्रकारचे डॉक्युमेंटेशनचे १५५ पेक्षा अधिक कॅम्प तसेच आरोग्य कॅम्प, वृक्षलागवड- वृक्षसंगोपन, धार्मिक सेवाकार्य, आपत्कालीन परिस्थितीमध्ये मदतकार्य याद्वारे आजवर 35 हजारपेक्षा अधिक लोकांना लाभ मिळाला आहे.",
      content_two : "विविध रस्ते, पिण्याच्या पाण्याची पाईपलाईन, सांडपाणी(ड्रेनेज), पथदिवे(स्ट्रीटलाईट्स), बांधकाम, सुशोभीकरण, सुरक्षा इ. विकासकामे व सार्वजनिक उपक्रम अशी सन 2018 ते जून 2021 या अडीच वर्षाच्या काळात तब्बल 30 कोटी 42 लाख 61 हजार 285 रुपयांची विकासकामे करण्यात आली आहेत.",
      img: mainimage
    })
  };

  const docContent = ()=> {
    setcontent({
      content_one : "मोफत आधार कार्ड, पॅन कार्ड, रेशन कार्ड, मतदान नावनोंदणी अभियान कॅम्प राबविण्यात आले. सन २०१६ पासून वाघोली परिसरात आधार कार्ड, पॅन कार्ड, रेशन कार्ड व इतर नागरी सुविधांसाठी मोफत १५५ पेक्षा अधिक कॅम्प वाड्या, वस्त्या, सोसायट्या इत्यादी भागात अनिल भाऊ सातव पाटील फाऊंडेशनच्या माध्यमातून राबविण्यात आले आहेत.",
      content_two : "आत्तापर्यंत तब्बल 35 हजार पेक्षा अधिक लोकांना या योजनेचा लाभ मिळाला आहे.",
      img: document
    })
  }
  

  return (
    <>
    <p className='text-center text-2xl pt-10 '>सामाजिक कार्ये</p>
    <div className='py-10 flex justify-between xl:px-[70px] items-center'>
      <div className=''>
        <div className=' flex items-center w-[30rem]'>
          <p className='border-2 text-justify border-black z-[2] bg-slate-100 p-4 rounded-lg cursor-pointer hover:bg-slate-200'>
          {content.content_one}
          </p>
        </div>
        <div className='mt-[-5rem] ml-[10rem] '>
          <img className='border-2 border-black w-[500px] z-[1]' src={content.img} alt="" />
        </div>
        <div className='ml-[20rem] mt-[-5rem] flex items-center w-[30rem]'>
          <p className='border-2 text-justify border-black z-[2] bg-slate-100 p-4 rounded-lg cursor-pointer hover:bg-slate-200'>
          {content.content_two}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={main} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={docContent} src={doc} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={culture} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={doctor} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={women} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={flood} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={sport} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={blood} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={dev} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={green} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={smart} alt="" />
        <img className='cursor-pointer rounded-lg w-10 sm:w-40 shadow-2xl mx-1 sm:mx-4 my-4' onClick={mainContent} src={clean} alt="" />
      </div>
    </div>
    </>
  )
}

// </div>
// <div className='flex justify-evenly gap-2 py-4'>

// </div>
// <div className='flex justify-evenly gap-2 py-4'>