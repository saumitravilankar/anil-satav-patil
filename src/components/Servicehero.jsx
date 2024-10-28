import React,{useState} from 'react'
import asptree from './images/asptree.png'
import './styles/Servicehero.css'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import { useRef } from 'react';
import { useInView } from 'framer-motion'

export default function Servicehero() {

  const [counterOn, setCounterOn] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div id='servicehero'  className='overflow-hidden flex bg-slate-100 justify-center'>
      <div className="container  my-16 px-2 ">

        <section className="text-gray-800 text-center lg:text-left">

          <div ref={ref} className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div 
              
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1:0,
                transition: "all 2s"
              }}
              className="mb-12 lg:mb-0">
                <div
                  className="relative block rounded-lg shadow-lg px-6 py-4 md:px-12 lg:-mr-14"
                  style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)", zIndex: 1}}
                >
                  <h2 className="font-bold mb-4 xl:text-3xl text-2xl">अनिलभाऊ सातव पाटील फाउंडेशनमार्फत करण्यात आलेली कामे</h2>
                  <p className="text-gray-500 mb-12 text-justify">
                  योग्य नियोजन, लोकशाही प्रक्रिया, पारदर्शकता, उत्तरदायी कारभार, लोकसहभाग, कायद्यापुढे समानता, नागरिक केंद्रित शासन प्रक्रिया, जलद न्यायिक प्रक्रिया, मूलभूत हक्कांची अंमलबजावणी, मुक्तसंचार, शांततामय सहजीवन, कायदा सुव्यवस्था, रस्ते सुरक्षा, महिला सक्षमीकरण, बाल सुरक्षा.
                  </p>
                  <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                  <div className="grid md:grid-cols-2 gap-x-6">
                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">{counterOn && <CountUp start={0} end={155} duration={3} delay={0} />}</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">पेक्षा अधिक मोफत विविध कॅम्प </h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                      <h2 className="text-3xl font-bold text-dark mb-4">{counterOn && <CountUp start={0} end={35000} duration={3} delay={0} />}</h2>
                      <h5 className="text-lg font-medium text-gray-500 mb-0">पेक्षा अधिक नागरिकांना लाभ</h5>
                    </div>
                
                  </div>
                  </ScrollTrigger>
                </div>
              </div>

              <div
              
              style={{
                transform: isInView ? "none" : "translateX(200px)",
                opacity: isInView ? 1:0,
                transition: "all 2s"
              }}>
                <img
                  src={asptree}
                  className="w-full bg-white shadow-lg fancy-border-radius "
                  alt=""
                />
              </div>
            </div>
          </div>
          
        </section>

      </div>
    </div>
  )
}
