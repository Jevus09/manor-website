import React from 'react'
import BANNER from '../assets/rehab/banner.jpg'
import REHAB from '../assets/rehab/rehab.jpg'
import GIF from '../assets/rehab/rehab.gif'
import { IoIosLaptop } from 'react-icons/io'
import { BiFridge } from 'react-icons/bi'
import { GiBlackBook, GiBalloons } from 'react-icons/gi'
import { TbNurse } from 'react-icons/tb'
import {
  MdOutlineScreenshotMonitor,
  MdOutlineMeetingRoom,
} from 'react-icons/md'
import { LuConciergeBell } from 'react-icons/lu'
import { FaBus } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import RehabCards from '../components/RehabCards'
import { AnimationOnScroll } from 'react-animation-on-scroll'


const data = [
  {
    id: 1,
    icon: <LuConciergeBell />,
    desc: 'Personal concierge service available during the day',
  },
  {
    id: 2,
    icon: <MdOutlineMeetingRoom />,
    desc: 'Private rooms with a private shower and bath',
  },
  {
    id: 3,
    icon: <MdOutlineScreenshotMonitor />,
    desc: 'Flat screen satellite television in all rooms',
  },
  {
    id: 4,
    icon: <IoIosLaptop />,
    desc: 'Wireless internet access (portable laptop available upon request)',
  },
  {
    id: 5,
    icon: <TbNurse />,
    desc: '24-hour licensed nurses and certified nursing assistants',
  },
  {
    id: 6,
    icon: <GiBlackBook />,
    desc: 'Portable library (see concierge to locate preferred books)',
  },
  {
    id: 7,
    icon: <BiFridge />,
    desc: 'Refrigerator in room - fully stocked with the non-alcoholic beverage of your choice',
  },
  {
    id: 8,
    icon: <GiBalloons />,
    desc: 'Welcome basket with plants and balloons upon arrival',
  },
  {
    id: 9,
    icon: <FaBus />,
    desc: 'Lee Manor bus service available (see concierge for availability and booking)',
  },
  {
    id: 10,
    icon: <BsTelephone />,
    desc: 'Telephones in all rooms',
  },
]

const Rehabilitation = () => {
  return (
    <div>
      {/* Top Banner */}
      <div>
        <div
          className='flex flex-col items-center justify-center h-72 md:h-96 bg-center bg-cover font-bold '
          style={{
            backgroundImage: `linear-gradient(#00000085, #00000085), url(${REHAB})`,
          }}
        >
          <div className='flex flex-col justify-center text-center font-bold text-white items-center'>
            <h1>Rehabilitation Programs</h1>
            <p className='px-8 md:px-32 xl:px-96 text-white text-xs md:text-base'>
              Experience comfort and care in our tastefully decorated units and
              rooms designed specifically for short term rehab patients. At Lee
              Manor, we prioritize your rehabilitation journey by providing a
              range of amenities to ensure your comfort throughout the process.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className='flex flex-col items-center justify-center bg-[#09153d] '>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 '>
          {data.map((item) => (
            <div key={item.id} className='text-white w-44 text-center p-4'>
              <h3 className='flex items-center justify-center text-xl8'>
                {item.icon}
              </h3>
              <h5 className='text-xs'>{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Ability */}
      <div >
      <div className='flex justify-center h-72  '>
        <img src={GIF} alt='' />
      </div>
      <div className='flex flex-col text-center justify-center '>
        <div className='py-5'>
          <h1 className='px-2'>
            SHORT-TERM REHAB SPECIALITY PROGRAMS AND SERVICES
          </h1>
        </div>
        <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
        <RehabCards  />
        </AnimationOnScroll>
        <div className='flex justify-center items-center py-6  '>
          <div
            className='bg-[#f5efed]w-5/6 md:w-4/6 py-5 flex flex-col justify-center items-center'
            style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
          >
            <p className=' w-4/6 '>
              Post-Hospital Rehabilitation patients at our facility receive
              specialized therapy from Ability Rehab, Chicagoland's premier
              provider of Physical, Occupational, and Speech-Language
              rehabilitation. With therapists available up to 7 days a week,
              they work closely with patients throughout their rehabilitation
              stay, ensuring powerful therapy solutions and optimal outcomes.
            </p>
            <a
              href='https://abilityrehab.net/'
              className='no-underline text-blue-600'
              target='_blank'
              rel='noreferrer'
            >
              Click here to read more about Ability Rehab!
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* Questions Banner */}
      <div className=''>
        <div
          className='flex flex-col items-center justify-center h-60 md:h-80 bg-center bg-cover font-bold '
          style={{
            backgroundImage: `linear-gradient(#00000085, #00000085), url(${BANNER})`,
          }}
        >
          <div className='flex flex-col text-white justify-center text-center items-center '>
            <h1>Questions about our rehab services?</h1>
            <p className='pt-4'>
              Contact our staff at{' '}
              <a className='no-underline text-white' href='tel:+847-635-4000'>
                +1 847 635 4000
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rehabilitation
