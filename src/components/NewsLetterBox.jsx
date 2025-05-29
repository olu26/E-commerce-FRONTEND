import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event)=> {
        event.preventDefault();  
    }

  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800 '>subscribe and get 20% off</p>
        <p className='text-gray-400 mt-3 '>
            subscribe to our newsletter and get 20% off on your first purchase. 
            <br /> we promise not to spam you with irrelevant emails.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3  '>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none ' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4  '>subscribe</button>
            
        </form>
      
    </div>
  )
}

export default NewsLetterBox
