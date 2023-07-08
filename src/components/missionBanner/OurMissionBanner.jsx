import React from 'react'
import missionImg from '../../assets/missingimg.jpeg';
import './missionBanner.css'

const OurMissionBanner = () => {

  return (
    <div className='main h-80 bg-white  ' >
        <img className='missionImg' style={{height: '30vh'}} src={missionImg} alt="" />
        <div className="text">
          <div className='textarea bg-white'>
            <h1 className='missionText'>'' Our Mission</h1>
            <p>
            Lee Manor is committed to providing services which promote the highest standards of well-being in a safe, comfortable, community-integrated environment catered to the unique needs of our residents while promoting each resident's dignity and individuality.
            </p>
          </div>
        </div>
      </div>
  )
}

export default OurMissionBanner
