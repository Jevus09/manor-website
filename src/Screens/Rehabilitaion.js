import React from 'react';
import BANNER from '../assets/rehab/banner.jpg'
import VILE from '../assets/rehab/ability.png'
import REHAB from '../assets/rehab/rehab.jpg';
import GIF from '../assets/rehab/rehab.gif'
import { IoIosLaptop } from 'react-icons/io';
import { BiFridge } from 'react-icons/bi';
import { GiBlackBook, GiBalloons } from 'react-icons/gi';
import { TbNurse } from 'react-icons/tb';
import { MdOutlineScreenshotMonitor, MdOutlineMeetingRoom } from 'react-icons/md';
import { LuConciergeBell } from 'react-icons/lu';
import { FaBus } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';


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
];

const Rehabilitation = () => {
  return (
    <div>
      {/* Top Banner */}
      <div>
        <div className='flex flex-col items-center justify-center h-72 md:h-96 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${REHAB})` }}>
          <div className='flex flex-col justify-center text-center font-bold text-white items-center'>
            <h1 >Rehabilitation Programs</h1>
            <p className='px-8 md:px-32 xl:px-96 text-white text-xs md:text-base'>Experience comfort and care in our tastefully decorated units and rooms designed specifically for short term rehab patients. At Lee Manor, we prioritize your rehabilitation journey by providing a range of amenities to ensure your comfort throughout the process.</p>
          </div>
        </div>
      </div>



      {/* Cards */}
      <div className='flex flex-col items-center justify-center bg-[#09153d] '>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4 '>
          {data.map((item) => (
            <div key={item.id} className='text-white w-44 text-center p-4'>
              <h3 className='flex items-center justify-center text-xl8'>{item.icon}</h3>
              <h5 className='text-xs'>{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>



      {/* Ability */}
      <div className='flex justify-center h-72 '>
        <img src={GIF} alt='' />
      </div>
      <div className='flex flex-col text-center justify-center bg-[linear-gradient(_#FFFFFF_25%,_#f5efed_50%)]'>
        <div className='py-5'>
          <h1 className='px-2'>SHORT-TERM REHAB SPECIALITY PROGRAMS AND SERVICES</h1>
        </div>
        <div className='flex text-start justify-center px-4'>
          <ul className='list-disc'>
            <li>Ability Rehab is a contracted therapy provider offering Physical, Occupational, and Speech-Language rehabilitation.</li>
            <li>Therapists are available up to 7 days a week, providing consistent care.</li>
            <li>The focus is on achieving the highest level of recovery through individually designed rehabilitation care plans.</li>
            <li>The interdisciplinary care team and Ability therapists collaborate to create these plans.</li>
          </ul>
          <ul className='list-disc'>
            <li>The mission of Ability Rehab is to provide patient-centered care and ensure optimal outcomes.</li>
            <li>The goal is for patients to succeed in treatment and return home to an independent life.</li>
            <li>The facility is staffed with nurses, therapists, and area physicians dedicated to delivering quick recovery and expected results.</li>
            <li>Ability Rehab is a trusted therapy provider, known for its commitment to patient-centered care.</li>
          </ul>
        </div>
        <div className='flex justify-center flex-col py-5'>
          <p className=' px-4  md:px-32 '>

            Post-Hospital Rehabilitation patients at our facility receive specialized therapy from Ability Rehab, Chicagoland's premier provider of Physical, Occupational, and Speech-Language rehabilitation. With therapists available up to 7 days a week, they work closely with patients throughout their rehabilitation stay, ensuring powerful therapy solutions and optimal outcomes.
          </p>
          <a href='https://abilityrehab.net/' className='no-underline text-blue-500' target='_blank' rel='noreferrer'   >Read More...</a>
        </div>
        <div className='flex flex-col md:flex-row  bg-[#09153d] text-white py-12 px-12 md:px-32 justify-between '>
          <div className='flex flex-col md:flex-row  items-center border border-black w-full  rounded-xl bg-[#0e2263] mr-6 px-4 my-6 md:my-0 '>
            <img src={VILE} alt='' className='h-32 rounded-full hidden sm:block ' />
            <p className='text-start  p-4  '>
              All programs have a wide range of nursing services, 24 hours a day, 7 days a week. Each of the programs for both short term and long term patients has a consulting specialist in that field. <br />
              For those residents staying with Lee Manor for a short term stay, a Social Service Worker will assist with comprehensive discharge planning, including securing necessary durable medical equipment, home health services, and outpatient rehab services according to your physician’s orders to ensure a safe return home.
            </p>
          </div>
          <div className='flex flex-col justify-center border border-black w-full md:w-96  py-4 px-8 rounded-xl bg-[#0e2263]'  >
            <h4>Our Therapy Consists Of:</h4>
            <ul className='text-start list-disc flex flex-col text-sm '>
              <li className='' >Physical Therapy</li>
              <li>Occupational Therapy</li>
              <li>Respiratory Therapy</li>
              <li>Speech Therapy</li>
              <li>Wound Care Therapy</li>
            </ul>
          </div>
        </div>


      </div>
      {/* Questions Banner */}
      <div className=''>
        <div className='flex flex-col items-center justify-center h-60 md:h-80 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${BANNER})` }}>
          <div className='flex flex-col text-white justify-center text-center items-center '>
            <h1>Questions about our rehab services?</h1>
            <p className='pt-4'>Contact our staff at +1 847 635 4000</p>
          </div>
        </div>



      </div>

    </div>
  );
};

export default Rehabilitation;