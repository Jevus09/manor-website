import React from 'react';
import REHAB from '../assets/rehab/rehab.jpg';
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
      {/* Banner */}
      <div className='flex flex-col items-center justify-center h-72 bg-center bg-cover font-bold brightness-75 ' style={{ backgroundImage: `url(${REHAB})` }}>
        <h1>Rehabilitation Programs</h1>
        <p className='hidden sm:block px-32 xl:px-96 text-white'>Experience comfort and care in our tastefully decorated units and rooms designed specifically for short term rehab patients. At Lee Manor, we prioritize your rehabilitation journey by providing a range of amenities to ensure your comfort throughout the process.</p>
      </div>

      {/* Cards */}
      <div className='flex flex-col items-center justify-center bg-[#09153d]'>
        <div className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
          {data.map((item) => (
            <div key={item.id} className='text-white w-52 text-center p-4'>
              <h3 className='flex items-center justify-center text-xl8'>{item.icon}</h3>
              <h5 className='text-xs'>{item.desc}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rehabilitation;