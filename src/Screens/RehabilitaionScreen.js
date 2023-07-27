import React, { useEffect, useState } from 'react'
import BANNER from '../assets/rehab/Rehab-banner.webp'
import REHAB from '../assets/rehab/rehab.webp'
import GIF from '../assets/rehab/rehab.gif'
import { IoIosLaptop } from 'react-icons/io'
import { BiFridge } from 'react-icons/bi'
import { GiBlackBook, GiBalloons, GiHospitalCross } from 'react-icons/gi'
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
import TEAM from '../assets/rehab/TherapyGroup1.jpg'
import AdditionalCare from '../components/AdditionalCare'
import { TiArrowUpOutline } from 'react-icons/ti'
import { Helmet } from "react-helmet"



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

const RehabilitationScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener("scroll", toggleVisible, true);
    return () => {
      window.removeEventListener("scroll", toggleVisible, true);
    }
  }, []);

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lee Manor | Rehabilitation Programs</title>
      </Helmet>
      {/* Top Banner */}
      <div>
        <div
          className='flex flex-col items-center justify-center h-72 md:h-96 bg-center bg-cover font-bold '
          style={{
            backgroundImage: `linear-gradient(#00000085, #00000085), url(${REHAB})`,
          }}
        >
          <div className='flex flex-col justify-center text-center font-bold text-white items-center '>
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





      {/* TOP SERVICES */}
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




          {/*Team photo/card*/}
          <div className='flex flex-col md:flex-row justify-center items-center pt-32 md:px-12  '>
            <div className=' md:h-72 lg:h-96 w-104 md:w-full lg:w-128 flex flex-col items-start rounded-t-2xl lg:rounded-2xl bg-[#fbdbc1] text-start pl-12 py-6 md:py-1 lg:py-6 ' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }} >
              <h1 className='text-4xl lg:text-6xl text-[#df6706] md:invisible lg:visible' ><GiHospitalCross /></h1>
              <p className='flex items-center items-start h-60 md:h-80 pr-3 lg:pr-8 text-sm md:text-xs lg:text-sm '>
                Post-Hospital Rehabilitation patients will receive on site, specialized therapy offered by our contracted therapy provider, Ability Rehab. Ability Rehab is Chicagoland's premier contracted provider of Physical, Occupational and Speech-Language rehabilitation. Ability therapists are available up to 7 days/week and have the ability to work with the same patients during their rehabilitation stay to ensure powerful therapy solutions and optimal patient outcomes.
              </p>
              <a
                href='https://abilityrehab.net/'
                className='no-underline text-white md:font-bold bg-[#df6706] px-3 py-2 rounded-xl '
                target='_blank'
                rel='noreferrer'
              >
                Learn More
              </a>
            </div>
            <img src={TEAM} alt='team' className=' w-104 md:h-72 lg:h-96 md:w-auto  md:scale-110 rounded-b-2xl md:rounded-2xl' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }} />
          </div>

          <div className='py-24'>
            <h1 className='px-2'>
              SHORT-TERM REHAB SPECIALITY PROGRAMS
            </h1>
          </div>





          {/*SHORT-TERM REHAB CARDS*/}
          <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
            <RehabCards />
          </AnimationOnScroll>





          {/*ADDITIONAL CARE*/}
          <AdditionalCare />
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
      <button className={visible && 'fixed bottom-4 right-4 md:bottom-12 md:right-16 z40 bg-[#333333] rounded-full px-3 py-2 text-white text-sm md:hover:scale-125 duration-500'} onClick={clickHandler}  > <TiArrowUpOutline className='text-xl' />UP</button>
    </div>
  )
}

export default RehabilitationScreen
