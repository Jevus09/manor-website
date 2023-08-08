import React from 'react'
import Nurse from '../assets/NursingCare/nurse.webp'
import Services from '../components/nursingcare/Services'
import Physicians from '../components/nursingcare/Physicians'
import { Helmet } from "react-helmet"
import { HelmetProvider } from 'react-helmet-async'

const NursingCareScreen = () => {
  return (
    <div className='bg-[#edf4ff]'>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lee Manor | Skilled Nursing Care</title>
        </Helmet>
      </HelmetProvider>
      {/*Banner*/}
      <div className=''>
        <div className=' h-60 md:h-80 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${Nurse})` }}>
          <div>
            <h1 className='pt-32 flex items-center justify-center text-white' >SKILLED NURSING CARE</h1>
          </div>
        </div>
      </div>
      <Physicians />
      <Services />


    </div>
  )
}

export default NursingCareScreen