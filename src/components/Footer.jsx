import React from 'react'
import { ICONS } from '../assets/icons'
import { i } from 'framer-motion/client'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <>
      <div className='relative mt-10'>
        <div className='bg-black rounded-3xl flex flex-col lg:flex-row md:justify-between items-center p-3 md:p-4 ml-2 md:left-1/4 sm:p-10 absolute bottom-100'>
          <div className='mb-3 lg:mb-0'>
            <p className='text-white text-xl md:text-4xl font-extrabold'>
              STAY UPTO DATE ABOUT
            </p>
            <p className='text-white text-xl md:text-4xl font-extrabold'>
              OUR LATEST OFFERS
            </p>
          </div>
          <div className='md:ml-8'>
            <div className='relative'>
              <i className='absolute left-5 top-1 md:top-2'>
                <ICONS.MAIL color='grey' fontSize={25} />
              </i>
              <input type="text" placeholder='enter your email address' className='rounded-full pl-14 pr-10 py-1 md:py-2 mb-3' />
            </div>
            <button className='text-black bg-white rounded-full px-14 py-1 md:py-2'>Subscribe to Newsletter</button>
          </div>
        </div>

        <div className='h-20'></div>
        <div className='bg-[#F0F0F0] py-20 px-10'>
          <div className='flex flex-col md:flex-row mt-20 lg:mt-1 justify-evenly border-b border-[#000000] py-10'>
            <div>
              <p className='text-black font-extrabold text-3xl'><Link to={'/'}>SHOP.CO</Link></p>
              <p className='text-[#00000099] text-sm md:text-md w-64 md:w-72 my-4 md:my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A at alias beatae nemo vero non pariatur.</p>
              <div className='flex'>
                <i className='p-2 m-2 bg-white rounded-full border-2 border-gray-300'>
                  <ICONS.TWITTWER fontSize={15} />
                </i>
                <i className='mx-2 mt-2.5 rounded-full'>
                  <ICONS.FACEBOOK fontSize={26} />
                </i>
                <i className='p-2 m-2 bg-white rounded-full border-2 border-gray-300'>
                  <ICONS.INSTAGRAM fontSize={15} />
                </i>
                <i className='p-2 m-2 bg-white rounded-full border-2 border-gray-300'>
                  <ICONS.GITHUB fontSize={15} />
                </i>
              </div>
            </div>
  <div className='grid grid-cols-2 md:grid-cols-5 gap-3 mt-4 md:mt-0'>
            <div>
              <p className='text-black text-sm md:text-xl mb-2 md:mb-4'>COMPANY</p>
              <ul className='text-[#00000099] leading-5 md:leading-9 text-xs md:text-md'>
                <li>About</li>
                <li>Features</li>
                <li>Work</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <p className='text-black text-sm md:text-xl mb-2 md:mb-4'>HELP</p>
              <ul className='text-[#00000099] leading-5 md:leading-9 text-xs md:text-md'>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Term & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className='text-black text-sm md:text-xl mb-2 md:mb-4'>FAQ</p>
              <ul className='text-[#00000099] leading-5 md:leading-9 text-xs md:text-md'>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <p className='text-black text-sm md:text-xl mb-2 md:mb-4'>RESOURCES</p>
              <ul className='text-[#00000099] leading-5 md:leading-9 text-xs md:text-md'>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube </li>
              </ul>
            </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between md:px-20 mt-20 items-center'>
            <p className="text-center text-gray-500 tracking-wide">Shop.co &copy; 2000-2024, All rights reserved | Developer Fiza.</p>
            <div className='flex justify-around md:w-[35rem] mt-4 md:mt-0'>
              <i className='bg-white py-2 px-3 md:px-6 rounded-lg mr-2 md:ml-4'>
                <ICONS.VISA className='text-3xl md:text-5xl' color='blue' />
              </i>
              <i className='bg-white py-2 px-3 md:px-6 rounded-lg mr-2  md:ml-4'>
                <ICONS.MASTERCARD className='text-3xl md:text-5xl' color='orange' />
              </i>
              <i className='bg-white py-2 px-3 md:px-6 rounded-lg mr-2  md:ml-4'>
                <ICONS.PAYPAL className='text-3xl md:text-5xl' />
              </i>
              <i className='bg-white py-2 px-3 md:px-6 rounded-lg mr-2  md:ml-4'>
                <ICONS.APPLEPAY className='text-3xl md:text-5xl' />
              </i>
              <div className='bg-white flex items-center py-2 px-3 md:px-6 rounded-lg mr-2 md:ml-4'>
                <ICONS.GOOGLEPAY className='text-sm md:text-5xl mt-0.5' />
              <p className='text-xs font-bold ml-0.5'>Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
