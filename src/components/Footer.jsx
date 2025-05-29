import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, inventore omnis consequuntur odio exercitationem amet libero sapiente itaque laboriosam. Quos necessitatibus itaque voluptas eveniet magnam deleniti commodi maiores quibusdam delectus.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5  '>company</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li className='cursor-pointer hover:text-gray-900'>home</li>
                    <li className='cursor-pointer hover:text-gray-900'>about us</li>
                    <li className='cursor-pointer hover:text-gray-900'>delivery</li>
                    <li className='cursor-pointer hover:text-gray-900'>privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5  '>get in touch</p>
                <ul className='flex flex-col gap-1 text-gray-700'>
                    <li>+234 070 0000 0005</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center  '>copyright 2025</p>
        </div>
      
    </div>
  )
}

export default Footer
