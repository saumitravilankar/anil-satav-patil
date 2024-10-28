import React,{useRef} from 'react'
// import fullimage from './images/fullimage.png'
import './styles/Aboutintro.css'
import { useInView } from 'framer-motion'

import aboutintro from './images/aboutintro.png'

export default function Aboutintro() {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
    <div id='aboutintro' ref={ref} className='introdiv overflow-hidden bg-slate-100 md:flex justify-center items-center xl:px-40 '>
        <div style={{
          transform: isInView ? "none" : "translateX(-800px)",
          opacity: isInView ? 1:0,
          transition: "all 1s"
        }}
        className='text-end pt-10 pb-5 px-4 w-full text-orange-700'>
          <div className='my-8 px-2 '>
            <div className='text-3xl font-montes py-2'>स्वखर्चातून केलेले कार्य </div>
            <p className='text-slate-900 pl-5'>मोफत डॉक्युमेंटेशन कॅम्प : आधार कार्ड । पॅन कार्ड । रेशन कार्ड । मतदान नाव नोंदणी अभियान 
            पूर ग्रस्थांना मदत | आरोग्यविषयक कार्य | स्मार्ट वाघोलीसाठी प्रयत्नपूर्वक कार्य | अनेक ठिकाणी रस्ते बांधणी आणि दुरुस्ती | ट्रॅफिकमुळे होणाऱ्या समस्या, मंडई सुधारणा । सांडपाणी नियोजन </p>
          </div>
          <div className='my-8 px-2'>
            <div className='text-3xl font-montes py-2'>आरोग्य विषयक कार्य </div>
            <p className='text-slate-900 pl-5'>मोफत आरोग्य तपासणी शिबिरे तसेच रक्तदान शिबिरांचे आयोजन करून सामाजिक बांधिलकीचे महत्वाचे कार्य अनिल सातव फॉउंडेशन तर्फे करण्यात आले. कोरोनाच्या काळात अनेक नागरिकांचे प्राण वाचवण्यासाठी अविरत प्रयत्न केले गेले.</p>
          </div>
          <div className='mt-5 px-2 sm:pb-10'>
            <div className='text-3xl font-montes py-2'>सांस्कृतिक उपक्रम </div>
            <p className='text-slate-900 pl-5'>समाजात आपले सांस्कृतिक महत्व टिकून रहावे यासाठी पायी वारी, पालखी सोहळा, दिंडी सोहळा, सांस्कृतिक व सामाजिक उत्सवांचे आयोजन केले जाते. त्यावेळी भक्तांना आणि गरजूंना मदतकार्य केले जाते.</p>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <img className='w-full h-full' src={aboutintro} alt="" />
        </div>
        <div style={{
          transform: isInView ? "none" : "translateX(800px)",
          opacity: isInView ? 1:0,
          transition: "all 1s"
        }}
        className='text-start pt-10 pb-5 px-4 w-full text-emerald-900'>
          <div className='my-8 px-2 '>
            <div className='text-3xl font-montes py-2'>महिला सक्षमीकरण</div>
            <p className=' text-slate-900 pr-5'>समाजातील महिला सक्षम आणि शिक्षित असल्यास कुटुंब, आणि पर्यायाने समाजाची प्रगती होते हे लक्षात घेऊन महिलांच्या सक्षमीकरणाचे उपक्रम राबविले गेले. खासकरून मागासवर्गीय महिलांना सशक्त करण्यासाठी ग्रामपंचायतीतर्फे हातभार लावण्यात आला.</p>
          </div>
          <div className='my-8 px-2'>
            <div className='text-3xl font-montes py-2'>आंदोलने व संघटनात्मक कार्य</div>
            <p className=' text-slate-900 pr-5'>निष्क्रिय सरकार समोर मागण्या तसेच विचार मांडण्यासाठी आंदोलने करण्याची गरज असते. त्यासाठी अनेक यशस्वी आंदोलने फाऊंडेशन च्या माध्यमातून करण्यात आली. त्यासाठी अनिल भाऊ सातव पाटील फाउंडेशन कायम तत्पर असते.</p>
          </div>
          <div className='mt-5 px-2 pb-20 sm:pb-10'>
            <div className='text-3xl font-montes py-2 '>क्रीडा-विषयक कार्य</div>
            <p className=' text-slate-900 pr-5'>अनिल भाऊ सातव पाटील फाउंडेशन च्या माध्यमातून विविध उपक्रम भरवण्यात आले. मुलांकडून सामाजिक एकोपा जपला जावा तसेच त्यांच्या बौद्धिक आणि शारीरिक मूल्यांचा विकास व्हावा यासाठी स्पर्धा-परीक्षांचे आयोजन करण्यात येते.</p>
          </div>
        </div>
    </div>
    </>
  )
}
