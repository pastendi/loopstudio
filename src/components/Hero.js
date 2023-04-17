import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero'>
      <div className='container max-w-6xl mx-auto px-6 py-12 '>
        <Navbar />
        <div className='max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:my-32 md:text-6xl'>
          Impressive Experiences that deliver
        </div>
      </div>
    </div>
  )
}

export default Hero
