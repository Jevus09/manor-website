import React from 'react'
import BANNER from '../assets/additionalServices/services.jpg'
import {GiFruitBowl} from 'react-icons/gi'
import {MdOutlineLocalPharmacy, MdEmojiPeople} from 'react-icons/md'
import {ImLab} from 'react-icons/im'
import {FaXRay} from 'react-icons/fa'
import {GiUltrasound} from 'react-icons/gi'
import AdditionalServices from '../components/AdditionalServices'


const data = [
  {
    id: 1,
    title: 'Personalized Nutrition Services',
    icon: <GiFruitBowl/>,
  },
  {
    id: 2,
    title: 'Social Work Services',
    icon: <MdEmojiPeople/>,
  },
  {
    id: 3,
    title: 'Pharmacy',
    icon: <MdOutlineLocalPharmacy/>,
  },
  {
    id: 4,
    title: 'Lab - Routine',
    icon: <ImLab/>,
  },
  {
    id: 5,
    title: 'Portable X-Rays',
    icon: <FaXRay/>,
  },
  {
    id: 6,
    title: 'Arterial/Venous Dopplers',
    icon: <GiUltrasound/>,
  },
]


const AdditionalServicesScreen = () => {
  return (
    <div >

      {/*Banner*/}
      <div className=''>
        <div className=' h-60 md:h-80 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${BANNER})` }}>
          <div>
            <h1 className='pt-32 flex items-center justify-center text-white' >ADDITIONAL SERVICES</h1>
          </div>
        </div>
      </div>

      {/* services */}
      <div className='flex flex-col items-center justify-center bg-[#09153d] py-2 '>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-4 '>
          {data.map((item) => (
            <div key={item.id} className='text-white w-44 text-center p-4'>
              <h3 className='flex items-center justify-center text-xl8'>{item.icon}</h3>
              <h5 className='text-xs'>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>

      <AdditionalServices/>


    </div>
  )
}

export default AdditionalServicesScreen