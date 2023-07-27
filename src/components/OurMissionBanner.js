import React from 'react'
import missionImg from '../assets/mission.webp';


const OurMissionBanner = () => {

  return (
    <div className='flex justify-center items-center h-80' >
      <div className="flex justify-center items-center h-full w-screen md:w-auto">
        <img className='hidden sm:block h-full ' src={missionImg} alt="" />
        <div className='flex flex-col h-max-full  '>
          <h1 className='missionText'>'' Our Mission</h1>
          <p className=' missiongp w-96 text-sm text-start px-4 '>
            Lee Manor is committed to providing services which promote the highest standards of well-being in a safe, comfortable, community-integrated environment catered to the unique needs of our residents while promoting each resident's dignity and individuality.
          </p>
        </div>
      </div>

    </div>
  )
}

export default OurMissionBanner
