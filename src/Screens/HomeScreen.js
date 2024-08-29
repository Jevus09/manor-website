import React, { useEffect, useState } from 'react'
import FrontCarousel from '../components/FrontCarousel'
import Services from '../components/Services'
import OurMissionBanner from '../components/OurMissionBanner'
import Team from '../components/Team'
import SecondBanner from '../components/SecondBanner'
import Reasons from '../components/Reasons'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import {TiArrowUpOutline} from 'react-icons/ti'



const Homescreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener("scroll", toggleVisible, true);
    return () => {
      window.removeEventListener("scroll", toggleVisible, true);
    }
  }, []);
  
const clickHandler = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

  return (
    <div>        
      <FrontCarousel />
      <Services />
      <Reasons/>
      <OurMissionBanner/>
      <SecondBanner/>
      <Team/>
      <Programs/>
      <Testimonials/>

        <button className={visible && 'fixed bottom-4 right-4 md:bottom-12 md:right-16 z40 bg-[#333333] rounded-full px-2 py-2 text-white text-sm md:hover:scale-125 duration-500' } onClick={clickHandler} id="al" aria-label="Name"  > <TiArrowUpOutline className='text-xl' /></button>


    </div>
  )
}

export default Homescreen