import React from 'react'
import PARLOR from '../assets/additionalServices/parlor.webp'
import BEAUTY from '../assets/additionalServices/beauty.webp'
import { MdOutlineSportsGymnastics, } from 'react-icons/md'
import { RiComputerFill } from 'react-icons/ri'
import { FaBusAlt, FaDog } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { AiOutlineMedicineBox } from 'react-icons/ai'
import { AnimationOnScroll } from 'react-animation-on-scroll'

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
    service: 'Medicaid Services',
    icon: <AiOutlineMedicineBox />,
    desc: 'Onsite business Office Manager that can assist with Medicaid process',
  },
  {
    id: 6,
    service: 'Pet Friendly',
    icon: <FaDog />,
    desc: 'Bring your beloved furry companions along as we understand the therapeutic benefits of pet companionship and gladly accommodate your pets in our warm and welcoming environment.',
  },
]

const AdditionalServices = () => {
  return (
    <div className='bg-[#ebf3fc]'>
      {/* Top two cards */}

      <div className="pt-12">
        <div className="flex justify-center items-center ">
          <div className="flex flex-col md:flex-row items-center gap-4 h-max pb-12">

            <div className="flex flex-col justify-evenly lg:px-20 items-center h-96 w-96 md:w-full animate__animated animate__slideInLeft ">
              <img src={PARLOR} alt="Lee Manor" className="h-52 rounded-xl md:hover:scale-110 duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />

              <div className="flex flex-col justify-center h-32 items-center">
                <h4 className="py-2">Ice Cream Parlor</h4>
                <p className="text-xs text-center w-80 font-thin">Tuesday & Thursday 10:00 AM – 1:00 PM</p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly items-center lg:px-20 h-96 w-96 md:w-full animate__animated animate__slideInRight">
              <img src={BEAUTY} alt="rehab" className="h-52 rounded-xl md:hover:scale-110 duration-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
              <div className="flex flex-col justify-center h-32 items-center">
                <h4 className="text-center py-2">Beauty Shop</h4>
                <p className="text-xs text-center w-80 font-thin">Monday – Friday 1:30 PM – 3:30 PM/4:00 PM – 5:30 <br /> Saturday & Sunday 1:00 PM – 2:00 PM/3:00 PM – 3:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>






      {/* Five cards */}


      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <div className=' py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-4 lg:gap-2 place-content-center justify-items-center'>
          {data.map((item) => (
            <div
              key={item.id}
              className='flex flex-col justify-center h-80 md:h-96 px-4 bg-white rounded-xl md:text-center md:hover:scale-110 duration-500  xl:w-96 '
              style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
            >

              <div className='pt-10 w-max'>
                <h2 className='bg-[#3e72ac] p-3 text-white rounded-xl'>
                  {item.icon}
                </h2>
              </div>

              <h4 className='py-4 font-bold'>{item.service}</h4>
              <p className='h-56 text-sm font-thin'>{item.desc}</p>
            </div>
          ))}
        </div>

        </AnimationOnScroll>

    </div>

  )
}

export default AdditionalServices
