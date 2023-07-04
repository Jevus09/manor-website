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
           We start by making the patient assessment and follow through. Directing the Home Care Program every step of the way. </p>
           - Jane Smith, RN
          </div>
        </div>
      </div>
  )
}

export default OurMissionBanner
