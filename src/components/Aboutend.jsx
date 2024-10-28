import React from 'react'

export default function Aboutend() {
  return (
    <div className='sm:py-10'>
      <div id='karya-adhava' className='text-center text-4xl pt-10 pb-6'>
      कार्यअहवाल 
      </div>
      <div className="lg:flex justify-center gap-2 py-2 sm:px-40  ">
          <div>
              <div className='text-center py-4 text-xl px-4'>समाजोपयोगी व लोकाभिमुख कार्याचे तिसरे महापर्व</div>
              <div className='flex justify-center py-4 px-6 mb-10'>
              <iframe width="500" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/trXmymeFVxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
          <div>
              <div className='text-center py-4 text-xl px-4'>वाघोलीतील कार्याचा विकासनामा- कार्य अहवाल</div>
              <div className='flex justify-center py-4 px-6 pb-10'>
              <iframe width="500" height="315" style={{borderRadius: "10px"}} src="https://www.youtube.com/embed/pibWY9It1Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
          </div>
      </div>
    </div>
  )
}
