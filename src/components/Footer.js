import React from 'react'
import logo from '../static/images/logo.svg'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'
const Footer = () => {
  return (
    <div id='footer' className='container mx-auto max-w-6xl bg-black py-6'>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img src={logo} alt='logo' className='w-44' />
        <div className='flex justify-center items-center text-white gap-x-2'>
          <AiFillFacebook size={32} className='cursor-pointer' />
          <AiFillTwitterSquare size={32} className='cursor-pointer' />
          <AiFillInstagram size={32} className='cursor-pointer' />
          <AiFillLinkedin size={32} className='cursor-pointer' />
        </div>
        <p className='text-gray-200'>All right reserved &copy; 2022 </p>
      </div>
    </div>
  )
}

export default Footer
