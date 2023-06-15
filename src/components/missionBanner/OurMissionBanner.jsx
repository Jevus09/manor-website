import React from 'react'
import missionImg from '../../assets/missionImg.png';
import './missionBanner.css'

const OurMissionBanner = () => {

  return (
    <div className='main' >
        <img style={{height: '30vh'}} src={missionImg} alt="" />
        <div className="text">
          <div className='textarea'>
            <h1>Our Mission</h1>
            <p>
            Unlike a traditional nursing home, our services extend to those requiring a short term stay in our Sub-acute program. With newly designed private rooms, we cater to the needs of patients who may require 24 hour skilled nursing care as well as intensive therapy services. Lee Manor is proud to offer a superb, well rounded array of services and activities to enhance the lives of our residents.</p>
          </div>
        </div>
      </div>
  )
}

export default OurMissionBanner
