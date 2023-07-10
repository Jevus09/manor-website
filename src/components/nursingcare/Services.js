import React from 'react'
import { BsFillLungsFill, BsBandaidFill, BsFillClockFill } from 'react-icons/bs'
import { TbPhysotherapist } from 'react-icons/tb'
import { GiBrain, GiSwapBag, GiHospitalCross, GiMedicalThermometer, GiMedicalDrip } from 'react-icons/gi'
import { BiSolidBone } from 'react-icons/bi'




const data = [
    {
        id: 1,
        desc: '24 hour Skilled Nursing Care',
        icon: <BsFillClockFill />,

    },
    {
        id: 2,
        desc: 'Short and Long-Term Rehabilitation',
        icon: <TbPhysotherapist />,

    },
    {
        id: 3,
        desc: 'Post-Operative and Post-Acute Care',
        icon: <GiHospitalCross />,

    },
    {
        id: 4,
        desc: 'Tracheostomy Care',
        icon: <GiMedicalThermometer />,

    },
    {
        id: 5,
        desc: 'IV Therapy',
        icon: <GiMedicalDrip />,

    },
    {
        id: 6,
        desc: 'Comprehensive Wound Care',
        icon: <BsBandaidFill />,

    },
    {
        id: 7,
        desc: 'Neurology Care',
        icon: <GiBrain />,

    },
    {
        id: 8,
        desc: 'Orthopedic Care',
        icon: <BiSolidBone />,

    },
    {
        id: 8,
        desc: 'Pulmonary Care ',
        icon: <BsFillLungsFill />,

    },
    {
        id: 8,
        desc: 'Ostomy Care',
        icon: <GiSwapBag />,

    },

]

const Services = () => {
  return (
    <div className='pb-12'>
        {/* Title/Description */}
        <div className='flex w-full justify-evenly items-center pt-12 text-center py-12'>
            <h2>OUR SERVICES INCLUDE</h2>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   justify-items-center gap-6 xl:px-36'>
            {data.map((item) => (
                <div key={item.id} className=' w-5/6 md:w-80 lg:w-60 h-44 flex flex-col justify-center items-center rounded-2xl md:hover:scale-110 duration-500 bg-white' style={{boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                    <div className='w-max pt-2'>
                        <h4 className='bg-[#f97777] p-3 text-white rounded-xl'>{item.icon}</h4>
                    </div>
                    <div >
                        <p className='text-sm p-2 h-12 font-thin text-center'>{item.desc}</p>
                     </div>
                </div>
            ))}
        </div>




    </div>
  )
}

export default Services