import React from 'react'
import image1 from '../static/images/desktop/image-interactive.jpg'
const Feature = () => {
  return (
    <div id='feature'>
      <div className='relative container flex flex-col max-w-6xl mx-auto my-10 md:my-32 px-6 text-gray-900 md:flex-row md:px-0'>
        <img src={image1} alt='' />
        <div className='top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20'>
          <h2 className='max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left'>
            The leader in interactive VR
          </h2>
          <p className='max-w-md text-center md:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            aliquid quo consequuntur dolorem ex? Ullam dignissimos reiciendis
            consectetur enim ab nam natus, excepturi laborum repellat pariatur
            sequi tempora recusandae iure obcaecati blanditiis et ut maiores
            voluptatum itaque deleniti cum aspernatur libero? Nam ratione cumque
          </p>
        </div>
      </div>
    </div>
  )
}

export default Feature
