import React from 'react'
import missionImg from '../../assets/mission.webp';
import './missionBanner.css'

const OurMissionBanner = () => {

  return (
    <div className='flex justify-center items-center h-80 bg-white w-screen    ' >
        <div className="flex items-center h-full gap-4">
        <img className='hidden sm:block h-full' src={missionImg} alt="" />
          <div className='flex flex-col h-max-full'>
            <h1 className='missionText text-7xl'>'' Our Mission</h1>
            <p className='w-96 text-start '>
            Lee Manor is committed to providing services which promote the highest standards of well-being in a safe, comfortable, community-integrated environment catered to the unique needs of our residents while promoting each resident's dignity and individuality.
            </p>
            <p>-Emy Plodzien, Director of Nursing</p>
          </div>
        </div>
      </div>
  )
}

export default OurMissionBanner
