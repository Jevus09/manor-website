import React from 'react';
import { TfiWheelchair } from 'react-icons/tfi';
import { FaUserNurse } from 'react-icons/fa';
import { MdMedicalServices } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { TbTilde } from 'react-icons/tb';
import { MdLocalPharmacy } from 'react-icons/md';

const data = [
  {
    id: 1,
    icon: <TfiWheelchair />,
    title: 'Rehab Program',
    text: 'Wound Care Program',
    text2: 'Congestive Heart Failure Program',
  },
  {
    id: 2,
    icon: <FaUserNurse />,
    title: 'Skilled Nursing Care',
    text: '24 Hour Skilled Nursing Care',
    text2: ' Short And Long-Term Rehabilitation',
  },
  {
    id: 3,
    icon: <MdMedicalServices />,
    title: 'Additional Services',
    text: 'Personalized Nutritional Services',
    text2: 'Social Work Services',
  },
  {
    id: 4,
    icon: <FaHandHoldingHeart />,
    title: 'Resident Benefits',
    text: 'Personal concierge service',
    text2: 'Private rooms, private shower/bath',
  },
  {
    id: 5,
    icon: <GiBrain />,
    title: 'Stroke Recovery',
    text: 'Motor-skill exercises.',
    text2: 'Constraint-induced therapy',
  },
  {
    id: 6,
    icon: <MdLocalPharmacy />,
    title: 'Long Term Waver',
    text: 'Personalized Nutritional Services',
    text2: 'Social Work Services',
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 bg-[#3f87b9] h-full md:h-80 place-items-center ">
      {data.map((item) => (
        <div
          key={item.id}
          className="text-center flex flex-col items-center m-3"
        >
          <h3 className=" p-3 bg-white rounded-full text-[#3f87b9]">
            {item.icon}
          </h3>
          <h5 className="text-white text-base font-bold">{item.title}</h5>
          <TbTilde className='text-[#98bad6] my-1' />
          <p className="text-[#98bad6] text-xs font-thin">
            {item.text}
            <br />
            {item.text2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;