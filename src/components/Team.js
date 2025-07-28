import React from 'react';
//import JAY from '../assets/greetings/jay.jpg';
import HELEN from '../assets/greetings/helen.jpeg';
//import DIR from '../assets/greetings/director.webp';
import JUDY from '../assets/greetings/Judy.webp';
import TIF from '../assets/greetings/Tiffany.JPG'


const data = [

  // {
  //   id: 1,
  //   photo: DIR,
  //   name: 'Alexys Opel',
  //   job: 'Director of Social Services',
  //   title: 'BA/BS, MSW',
  //   desc: 'My passion lies in leading a skilled and compassionate team to provide top-quality care, empowering our residents to achieve their highest level of independence and happiness.',
  // },
  {
    id: 1,
    photo: TIF,
    name: 'Tiffany Suciu',
    job: 'Nurse Practitioner',
    title: 'BSN, MSN, FNP-C',
    desc: 'I am dedicated to providing compassionate, patient-centered care, focusing on holistic well-being to help individuals achieve optimal health and a balanced life.',
  },
  // {
  //   id: 3,
  //   photo: JAY,
  //   name: 'Jay Calderon',
  //   job: 'Administrator',
  //   title: 'MHA, MBA, LNHA, CDP, LPN',
  //   desc: 'I am dedicated to ensuring compassionate and exceptional care for our residents, fostering a warm and supportive environment that promotes healing and well-being.',
  // },
  {
    id: 2,
    photo: HELEN,
    name: 'Helen Reyes',
    title: 'BSN, RN, DNS-CT, RAC-CT, CDP',
    job: 'Administrator',
    desc: 'I am committed to upholding the highest standards of healthcare, leading a skilled team of caregivers, and ensuring our residents receive personalized and compassionate attention',
  },

  {
    id: 3,
    photo: JUDY,
    name: 'Judy Ortega',
    job: 'Wound Care Specialist',
    title: 'RN, BSN, WCC, CWCA',
    desc: 'I am deeply committed to delivering top-tier wound care, blending medical expertise with heartfelt compassion. My mission is to optimize healing, minimize discomfort, and enhance the quality of life for each patient. ',
  },


];

const Team = () => {



  return (
    <div className=' bg-[#fff8ef] py-20 ' id='team'  >
      <div className='flex flex-col justify-center items-center pb-10' >
        <h1 className='text-3xl font-bold text-[#284795] ' >Guiding Excellence</h1>
        <h2 className='text-sm'>Meet Our Dedicated Leadership Team</h2>
      </div>
      <div className='flex flex-wrap py-12 gap-4  lg:px-20  justify-center ' >
        {data.map((item) => (
          <div key={item.id} className='border h-110 md:h-112  w-80 flex flex-col justify-center items-center text-center bg-white rounded-2xl' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }} >
            <img src={item.photo} alt={item.name} className='h-40 rounded-full ' loading="lazy" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
            <h3 className='text-black pt-2' >{item.name}</h3>
            <h5 className='text-xs mb-3' >{item.title}</h5>
            <h5 className='text-[#284795]' >{item.job}</h5>
            <p className='px-6 md:h-32 xl:h-20 py-2 text-sm' >{item.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

