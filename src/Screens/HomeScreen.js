import React from 'react'
import FrontCarousel from '../components/FrontCarousel'
import Services from '../components/Services'
import OurMissionBanner from '../components/missionBanner/OurMissionBanner'
import Greeting from '../components/Greeting'
import SecondBanner from '../components/SecondBanner'
import Reasons from '../components/Reasons'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'


const Homescreen = () => {
  return (
    <div>        
      <FrontCarousel />
      <Services/>
      <OurMissionBanner/>
      <Greeting/>
      <SecondBanner/>
      <Reasons/>
      <Programs/>
      <Testimonials/>
    </div>
  )
}

export default Homescreen