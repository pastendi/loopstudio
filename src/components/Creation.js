import React from 'react'
import { creationImagesLinks } from '../utils/imagesLink'
const Creation = () => {
  return (
    <div id='creation'>
      <div className='container max-w-6xl mx-auto my-10 md:my-32 px-6 text-gray-900'>
        <div className='flex justify-center mb-20 md:justify-between'>
          <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
            Our creations
          </h2>
          <button className='hidden btn md:block'>See All</button>
        </div>
        <div className='grid w-full  md:gap-6 md:grid-cols-4'>
          {creationImagesLinks.map((item, index) => {
            return (
              <div
                className='group relative overflow-hidden transition mb-6 md:mb-0 text-4xl text-white text-bold uppercase'
                key={index}
              >
                <img
                  src={item.desktop}
                  alt={item.name}
                  className='text-black hidden md:block w-full group-hover:scale-110 duration-200'
                />
                <img
                  src={item.mobile}
                  alt={item.name}
                  className='text-black md:hidden w-full'
                />
                <div className='absolute top-0 bottom-0 right-0 left-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-500 group-hover:to-white group-hover:opacity-60'></div>
                <h5 className='absolute px-6 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black duration-200'>
                  {item.name}
                </h5>
              </div>
            )
          })}
        </div>
        <button className='block mt-6 md:hidden btn w-full'>See all</button>
      </div>
    </div>
  )
}

export default Creation
