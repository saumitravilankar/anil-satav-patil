import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import fb from './images/logo/fb.png'
import twitter from './images/logo/twitter.png'
import insta from './images/logo/insta.png'
import linkedin from './images/logo/linkedin.png'

import './styles/Socialmedia.css'

export default function Socialmedia() {
  return (
    <div id='post' className='py-10 xl:px-40'>
        <div className='text-center text-3xl sm:text-4xl xl:mb-5 text-white'>सोशल नेटवर्क</div>
        <div className='sm:flex justify-center sm:justify-start gap-20 py-7'>
            <div className='py-4 flex justify-center mb-4'>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="AnilSatavPatil"
                    options={{height: 600, width: 320}}
                />
            </div>
            <div className='py-8 sm:py-4 flex justify-center'>   
                <iframe title='youtubevid' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAnilSatavP&tabs=timeline&width=315&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="315" height="600" style={{border:"none",borderRadius:"10px" ,overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className='sm:hidden text-2xl font-semibol font-nunito text-center py-4 text-blue-600 '>Connect With Us</div>
            <div className='flex justify-center sm:my-auto sm:block gap-4'>
               <a rel='noreferrer' href="https://www.facebook.com/AnilSatavP" target={'_blank'}><img className='flex justify-center w-14 sm:py-6 cursor-pointer' src={fb} alt="" /></a>
               <a rel='noreferrer' href="https://twitter.com/AnilSatavPatil" target={'_blank'}><img className='flex justify-center w-14 sm:py-6 cursor-pointer' src={twitter} alt="" /></a>
               <a rel='noreferrer' href="https://www.instagram.com/anilsatavpatil/" target={'_blank'}><img className='flex justify-center w-14 sm:py-6 cursor-pointer' src={insta} alt="" /></a>
               <a rel='noreferrer' href="https://linktr.ee/anilsatavpatil" target={'_blank'}><img className='flex justify-center w-14 sm:py-6 cursor-pointer' src={linkedin} alt="" /></a>
            </div>
        </div>

    </div>
  )
}
