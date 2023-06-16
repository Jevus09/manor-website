import React from 'react';
import DOC from '../assets/doctor.jpg';

const SecondBanner = () => {
  return (
    <div className="relative ">
        <div  className="relative h-96 md:h-128 bg-center bg-cover  brightness-50 " style={{backgroundImage: `url(${DOC})`}}></div>  
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Care is Easier Than Ever!</h1>
        <p className="text-white text-sm md:text-lg text-center mt-4">
          Let us treat your loved ones like family.<br/> 
          Call us directly - <a href='tel:+847-635-4000' className='no-underline text-white'>847 635 4000</a>
        </p>
        <a href='/#' className=" text-sm md:text-base border border-line py-2 px-4 rounded-full text-white no-underline">Get in Touch</a>
      </div>
    </div>
  );
};

export default SecondBanner;