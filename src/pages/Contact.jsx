import React from 'react'
import TItle from '../components/TItle'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t  '>
        <TItle text1={"CONTACT"} text2={"US"} />
        

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28  '>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6  '>
          <p className='font-semibold text-xl text-gray-600'>our store</p>
          <p className='text-gray-500'>n07 modile <br /> ibejulekki awoyaya</p>
          <p className='text-gray-500'> tel: 0706735269 <br /> email: admin@forever.gmail.com</p>
          <p className='font-semibold text-xl text-gray-500 '> careers at foverer</p>
          <p></p>

        </div>

      </div>
      
    </div>
  )
}

export default Contact
