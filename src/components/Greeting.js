import React from 'react';
import Patient from '../assets/greetings/parient.jpg';
import Nurse from '../assets/greetings/nurse.jpg';
import Agency from '../assets/greetings/agency.jpg';
import { TbTilde } from 'react-icons/tb';

const data = [
  {
    id: 1,
    image: Patient,
    title: 'Meet Our Patients',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."
  },
  {
    id: 2,
    image: Nurse,
    title: 'Our Caregivers',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."
  },
  {
    id: 3,
    image: Agency,
    title: `About Our Agency`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ."
  },
];

const Greeting = () => {
  return (
    <div className="bg-[#f5efed] h-full">
      <h1 className="flex items-center justify-center pt-16 md:pb-12">Welcome to Lee Manor!</h1>
      <div className="flex flex-col md:flex-row md:justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 place-items-center p-4"
          >
            <img src={item.image} alt='' className='w-96 my-12 px-8 md:px-0'  />
            <h3>{item.title}</h3>
            <TbTilde className='text-[#3f87b9] text-xl my-2' />
            <p className='text-center w-72'>{item.description}</p>
            <a href='/#' className='text-[#3f87b9] no-underline'>READ MORE</a>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center p-10'>
        <a href='/#' className='py-3 bg-[#09153d] text-white px-5 rounded-full no-underline'>View Services</a>
      </div>
    </div>
  );
};

export default Greeting;