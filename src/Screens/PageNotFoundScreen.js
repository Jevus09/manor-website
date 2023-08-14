import React from 'react'
import BG from '../assets/404/404bg.jpg'
import DOC from '../assets/404/404.png'

const PageNotFoundScreen = () => {
  return (
    <div className='h-96 md:h-128 bg-center bg-cover' style={{backgroundImage: `url(${BG})`}}>
        <div className='flex h-full justify-center items-center'>
            <div className='flex flex-col justify-center items-center' >
                <h1 className='font-bold text-6xl' >oops!</h1>
                <h1>Page not found</h1>
                <a href='/' className='flex font-bold bg-[#09153d] text-white py-2 px-5 rounded-lg no-underline w-max' >Go Home!</a>

            </div>
            <div className='hidden md:block' >
                <img src={DOC} alt='doctor' className='h-128' />
            </div>
        </div>
        
    </div>
  )
}

export default PageNotFoundScreen