import React from 'react';
import PARLOR from '../assets/additionalServices/parlor.jpg';
import BEAUTY from '../assets/additionalServices/beauty.jpg';
import { MdOutlineSportsGymnastics } from 'react-icons/md';
import { RiComputerFill } from 'react-icons/ri';
import { FaBusAlt, FaDog } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

const data = [
  {
    id: 1,
    service: 'Activities',
    icon: <MdOutlineSportsGymnastics />,
    desc: 'Engage in a variety of enjoyable and therapeutic activities tailored to aid your post-rehabilitation journey, promoting physical, mental, and emotional well-being.',
  },
  {
    id: 2,
    service: 'Work Stations',
    icon: <RiComputerFill />,
    desc: 'Access state-of-the-art computer workstations equipped with the latest technology, enabling you to enhance your digital skills, stay connected, and explore new opportunities.',
  },
  {
    id: 3,
    service: 'Bus Trips Available',
    icon: <FaBusAlt />,
    desc: 'Embark on exciting bus trips to local attractions and events, offering opportunities for socialization, entertainment, and new experiences.',
  },
  {
    id: 4,
    service: 'Dedicated Staff',
    icon: <IoIosPeople />,
    desc: 'Our compassionate and knowledgeable staff is readily available to provide expert guidance and support, ensuring you receive the necessary assistance with Medicare, Medicaid, Social Security, and other insurance matters.',
  },
  {
    id: 5,
    service: 'Pet Friendly',
    icon: <FaDog />,
    desc: 'Bring your beloved furry companions along as we understand the therapeutic benefits of pet companionship and gladly accommodate your pets in our warm and welcoming environment.',
  },
];

const AdditionalServices = () => {
  return (
    <div className="bg-[#ebf3fc]">
      {/* Top two cards */}
      <div className="pt-12">
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center h-max">
            <div className="flex flex-col justify-evenly lg:px-20 items-center h-96 w-full">
              <img src={PARLOR} alt="Lee Manor" className="h-52" />
              <div className="flex flex-col justify-center items-center">
                <h4 className="py-2">Ice Cream Parlor</h4>
                <p className="text-xs text-center w-72">Tuesday & Thursday 10:00 AM – 1:00 PM</p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-center lg:px-20 w-full h-96">
              <img src={BEAUTY} alt="rehab" className="h-52" />
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-center text-base py-2">Beauty/Barber Shop</h4>
                <p className="text-xs text-center w-96">Monday – Friday 1:30 PM – 3:30 PM/4:00 PM – 5:30 <br/> Saturday & Sunday 1:00 PM – 2:00 PM/3:00 PM – 3:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Five cards */}
      <div className="pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 px-8 gap-4 lg:gap-2 justify-center items-center">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center h-80 md:h-96 px-4 bg-white rounded-xl md:text-center"
              style={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'}}
            >
              <div className="pt-10 w-max">
                <h2 className="bg-[#f97777] p-3 text-white rounded-xl">{item.icon}</h2>
              </div>
              <h4 className="py-4 font-bold">{item.service}</h4>
              <p className="h-56 text-sm font-thin">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;