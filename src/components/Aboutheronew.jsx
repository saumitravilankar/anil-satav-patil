import React from 'react'
import workimage from './images/workimage.png'

import aspname from './images/aspname.png'

export default function Aboutheronew() {
  return (
    <div id='about' className="container my-20 sm:my-24 px-2 mx-auto">
    
    <section className="text-gray-800">

        <div className="container xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 flex items-center">
              
              {/* img */}
              <div>
              <img
                  src={workimage}
                  className="w-full rounded-lg shadow-lg"
                  alt=""
              />
              </div>
              
              {/* info */}
              <div className=" lg:mb-0">
              <div
                  className="block rounded-lg shadow-lg px-2 text-justify lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
                  style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}
              >
                <h3 className="text-2xl text-center pt-8 pb-2 sm:py-4 font-bold mb-3">मनोगत...</h3>

                <p className="text-gra-500  px-2 text-justify mb-6">
                <span className='px-6'></span> वाघोली परिसराचा विकास हेच ध्येय समोर ठेऊन आजवर अनेक कामे शक्य तितक्या क्षमतेने ग्रामपंचायत वाघोली व अनिल भाऊ सातव पाटील फाउंडेशन यांच्या माध्यमातून आम्ही पूर्णत्त्वास आणली व जनहित साधण्याचा प्रयत्न करत आहोत. यापुढेही ही विकासकामांची शृंखला अशीच सुरू राहणार आहे.
                वाघोली परिसरात प्रामाणिकपणे काम करणे हे फक्त आपली मोलाची साथ लाभली म्हणून शक्य झाले आहे. आपण दिलेल्या विश्वासाने समाजकार्य करण्याचे बळ आम्हाला मिळते आणि त्यातून सर्व गोष्टी होतात. आपला सर्व परिसर आपले कुटुंब असून कुटुंबाच्या प्रश्नांची सोडवणूक करणे हे आमचे कर्तव्य आहे या भावनेतून आम्ही काम करीत आहोत.
                </p>

                <p className="text-gra-500  px-2 text-justify mb-6">
                <span className='px-6'></span> आतापर्यंत आम्ही वाघोलीच्या सुरक्षेच्या दृष्टीने अनेक कामे केली आहेत. विविध प्रश्न मार्गी लागावेत यासाठी आंदोलने, नागरिकांसाठी मोफत डॉक्युमेंटेश कॅम्प, कोरोनाच्या संकट काळात अन्नधान्याच्या किटपासून बचावासाठी केलेल्या विविध गोष्टींचे वाटप, पूरग्रस्तांना मदत, अनेक सांस्कृतिक उपक्रम राबवणे, स्पोर्ट अॅक्टिविटी, मोफत हेल्थ चेकअप कॅम्प, ब्लड कॅम्प, महिला सक्षमीकरण, ग्रीन वाघोली, क्लीन वाघोली, स्मार्ट वाघोली, डिजिटल वाघोली बनविण्यासाठी अनेक उपक्रम राबवले.
                </p>

                <p className="text-gra-500 px-2 text-justify">
                <span className='px-6'></span> तसेच भारतीय जनता पार्टीमार्फत व पीएमआरडीए कडून वाघोलीमध्ये बरीच कामे केली आहेत. यासोबतच अनिल भाऊ सातव पाटील फाऊंडेशन व ग्रामपंचायत सदस्या सौ. सुनीता अनिल सातव पाटील यांच्या माध्यमातून वाघोली परिसरातील अनेक प्रश्न प्रामाणिकपणे सोडवले आहेत. आपल्या वाघोलीच्या विकासकामांसाठी कुठल्याही निधीची अपेक्षा न ठेवत स्वखर्चातून अनेक कामे केली असून कॅम्प व निरनिराळे उपक्रम राबवून लोकहीत जपले आहे. हे काम इथून पुढेही निरंतर सुरूच राहील. यासाठी आपली साथ आणि आशीर्वाद सदैव पाठीशी असावेत हीच इच्छा...!!
                </p>

                <div className='flex justify-end py-6 mr-2 sm:py-8'>
                  <img className='w-40' src={aspname} alt="" />
                </div>
              </div>
              </div>

          </div>
        </div>

    </section>

    </div>
  )
}
