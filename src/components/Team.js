import React from 'react';
import JAY from '../assets/greetings/jay.jpg';
import NEAL from '../assets/greetings/neal.png';
import MOZ from '../assets/greetings/mozzie.webp';
import DIR from '../assets/greetings/director.jpg';


const data = [
  {
    id: 1,
    photo: MOZ,
    name: 'Mozzie',
    title: 'MHA, MBA, LNHA, CDP',
    job: 'Head of Nursing',
    desc: 'I am committed to upholding the highest standards of healthcare, leading a skilled team of caregivers, and ensuring our residents receive personalized and compassionate attention',
  },
  {
    id: 2,
    photo: NEAL,
    name: 'Neal Caffrey',
    title: 'MHA, MBA, LNHA, CDP',
    job: 'Operations Manager',
    desc: "My focus is on maintaining the facility's financial health, optimizing operational efficiency, and supporting the entire team to provide a nurturing environment where residents can thrive.",
},
{
    id: 3,
    photo: JAY,
    name: 'Jay Calderon',
    job: 'Administrator',
    title: 'MHA, MBA, LNHA, CDP',
    desc: 'I am dedicated to ensuring compassionate and exceptional care for our residents, fostering a warm and supportive environment that promotes healing and well-being.',
},
{
    id: 4,
    photo: DIR,
    name: 'John Doe',
    job: 'Director',
    title: 'MHA, MBA, LNHA, CDP',
    desc: 'My passion lies in leading a skilled and compassionate team to provide top-quality care, empowering our residents to achieve their highest level of independence and happiness.',
},


];

const Team = () => {



  return (
    <div className=' bg-[#fff8ef] py-20 '  id='team'  >
         <div className='flex flex-col justify-center items-center pb-10' >
            <h1 className='text-3xl font-bold text-[#284795] ' >Guiding Excellence</h1>
            <h2 className='text-sm'>Meet Our Dedicated Leadership Team</h2>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-12 gap-4 md:px-12 lg:px-8 xl:px-10 2xl:px-44  ' >
            {data.map((item) => (
                <div key={item.id}  className='border h-112  w-80 lg:w-60 xl:w-72 flex flex-col justify-center items-center text-center bg-white rounded-lg' style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
                    <img src={item.photo} alt={item.name} className='h-40 rounded-full ' style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} />
                    <h3 className='text-black pt-2' >{item.name}</h3>
                    <h5 className='text-xs mb-3' >{item.title}</h5>
                    <h5 className='text-blue-300' >{item.job}</h5>
                    <p className='px-6 pb-2 text-sm' >{item.desc}</p>

                 </div>
            ))}
         </div>
    </div>
  );
};

export default Team;