import React from 'react'
import FrontCarousel from '../components/FrontCarousel'
import Services from '../components/Services'
import OurMissionBanner from '../components/missionBanner/OurMissionBanner'
import Greeting from '../components/Greeting'
import SecondBanner from '../components/SecondBanner'
import Reasons from '../components/Reasons'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import {TiArrowUpOutline} from 'react-icons/ti'


const Homescreen = () => {

  
const clickHandler = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

  return (
    <div>        
      <FrontCarousel />
      <Services />

      <OurMissionBanner/>
      <Greeting/>
      <SecondBanner/>
      <Reasons/>
      <Programs/>
      <Testimonials/>
      <button className='fixed bottom-4 right-4 md:bottom-12 md:right-20 z40 bg-[#333333] rounded-full px-3 py-2 text-white text-sm md:hover:scale-125 duration-500' onClick={clickHandler}  > <TiArrowUpOutline className='text-xl' />UP</button>

    </div>
  )
}

export default Homescreen