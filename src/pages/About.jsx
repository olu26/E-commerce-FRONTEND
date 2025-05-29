import React from 'react'
import TItle from '../components/TItle'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t ' >  
        <TItle text1={"ABOUT"} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16 '>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, numquam voluptatibus. Repellat consequatur alias voluptatibus quas praesentium ipsa nam molestiae.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque nesciunt modi repellat omnis excepturi quibusdam placeat, incidunt reiciendis nemo provident.</p>
        <b className='text-gray-900 '>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>
        </div>

      </div>
      <div className='text-4xl py-4 '> 
        <TItle text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>QUALITY ASSURANCE:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>exceptional customer service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.</p>

        </div>

      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
