import React,{useRef} from 'react'
import { MdCall } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './styles/Contactnew.css'
import { useState } from 'react';

import emailjs from '@emailjs/browser';

export default function Contactnew() {

    const form = useRef();

    const [name, setName] = useState("hidden")
    const [submit, setSubmit] = useState('संदेश पाठवा')

    const sendEmail = (e) => {
        e.preventDefault();

        setSubmit('संदेश पाठवत आहोत....')
        emailjs.sendForm('service_tbwbu18', 'template_n43jwa4', form.current, 'PApHXFlP83JnCoRW9')
        .then((result) => {
            console.log(result.text);
            setSubmit('संदेश पाठवा')
            setName("")
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id='contactdiv' className='pb-10'>
        <div className='pb-20'>
            <iframe title='googlemaploc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.559629810838!2d73.9851656556129!3d18.590266197386427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c56df8c0df5b%3A0x7b945fa0f1de8fbf!2sKrishna%20Complex%20Satav%20Patil%20Chowk!5e0!3m2!1sen!2sin!4v1678901292407!5m2!1sen!2sin"  style={{border:"0" , width:"100%", height:"500px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id='contact' className='sm:flex border justify-center gap-10 bg-white bg-opacity-70 shadow-2xl border sm:mb-10 p-4 rounded-lg mx-10 sm:mx-40 text-xl sm:py-8'>
            <div className='sm:px-6 p-5 sm:py-6 rounded-xl bg-white shadow-2xl border border-black'>
                <p className='text-center text-xl py-4'>संपर्क साधा</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mb-6">
                        <input type="text" name='user_name' className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                        placeholder="Name"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" name='user_email' className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Email address"/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="tel" name='user_mobile' className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                        placeholder="Contact No."/>
                    </div>
                    <div className="form-group mb-6">
                        <textarea className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name='message'
                        id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="
                    w-full
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">{submit}</button>
                    <div className={`text-orange-600 text-xl text-center py-2 font-semibold ${name}`}>
                    संपर्क केल्याबद्दल धन्यवाद, आम्ही लवकरच आपल्याशी वार्तालाप करू!
                    </div>
                </form>
            </div>
            <div className='py-10 text-start text-lg'>
                <div className='flex px-10 sm:px-0 items-center gap-4 py-4'>
                    <div>
                        <MdCall />
                    </div>
                    <div>
                        संपर्क : <br />
                        <a href="tel:+918888991122">
                        +91 88889 91122
                        </a>
                    </div>
                </div>
                <div className='flex px-10 sm:px-0 items-center gap-4 py-4'>
                    <div>
                        <MdCall />
                    </div>
                    <div>
                    4S हेल्पलाईन - ( सेवा, सुविधा, सुरक्षा, सुशासन ) <br />
                        <a href="tel:+917378991122">
                        +91 7378 991122
                        </a>
                    </div>
                </div>
                <div className='flex px-10 sm:px-0 items-center gap-4 py-4'>
                    <div>
                        <FaMapMarkerAlt />
                    </div>
                    <div>
                        ऑफिस पत्ता : <br />
                        कृष्णा कॉम्प्लेक्स, फडई चौक,
                        वाघोली ता. हवेली, जि.पुणे.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
