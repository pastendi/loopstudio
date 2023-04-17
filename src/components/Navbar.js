import React, { useState } from 'react'
import logo from '../static/images/logo.svg'
import { navLinks } from '../utils/navLinks'
const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false)
  return (
    <div>
      <nav className='flex items-center justify-between font-bold text-white'>
        <img src={logo} alt='hello' />
        <div className='hidden h-10 font-alata md:flex md:space-x-8'>
          {navLinks.map((x) => {
            return (
              <div className='group'>
                <a href='#' className='capitalize text-lg'>
                  {x.link}
                </a>
                <div className='mx-2 group-hover:border-b group-hover:border-blue-50'></div>
              </div>
            )
          })}
        </div>
        <div className='md:hidden'>
          <button
            type='button'
            className='z-40 block hamburger focus:outline-none'
            onClick={() => setMenuClicked(!menuClicked)}
          >
            <span
              className={`${
                menuClicked ? 'cross hamburger-top' : 'hamburger-top'
              }`}
            ></span>
            <span
              className={`${menuClicked ? 'hidden' : 'hamburger-middle'}`}
            ></span>
            <span
              className={` ${
                menuClicked ? 'cross hamburger-bottom' : 'hamburger-bottom'
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <div
        id='mobile-menu'
        className={`absolute top-0 bottom-0 left-0 flex-col self-end md:hidden w-full min-h-screen py-1 pt-40 pl-12 space-y-3  bg-black ${
          menuClicked ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map((x) => {
          return (
            <div className='group'>
              <a href='#' className='capitalize text-lg text-white'>
                {x.link}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
