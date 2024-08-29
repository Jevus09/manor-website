import React from 'react'
import { PiPuzzlePieceBold, PiShootingStarDuotone } from 'react-icons/pi'
import { BsCalendar2Check, BsHeartPulse } from 'react-icons/bs'
import { TbPhysotherapist } from 'react-icons/tb'
import { GiStairsGoal, GiHeartShield } from 'react-icons/gi'
import { FaBriefcaseMedical } from 'react-icons/fa'




const data = [
    {
        id: 1,
        desc: 'Ability Rehab is a contracted therapy provider offering Physical, Occupational, and Speech-Language rehabilitation.',
        icon: <PiPuzzlePieceBold />,

    },
    {
        id: 2,
        desc: 'Therapists are available up to 7 days a week, providing consistent care.',
        icon: <BsCalendar2Check />,

    },
    {
        id: 3,
        desc: 'The focus is on achieving the highest level of recovery through individually designed rehabilitation care plans.',
        icon: <PiShootingStarDuotone />,

    },
    {
        id: 4,
        desc: 'The interdisciplinary care team and Ability therapists collaborate to create these plans.',
        icon: <TbPhysotherapist />,

    },
    {
        id: 5,
        desc: 'The mission of Ability Rehab is to provide patient-centered care and ensure optimal outcomes.',
        icon: <BsHeartPulse />,

    },
    {
        id: 6,
        desc: 'The goal is for patients to succeed in treatment and return home to an independent life.',
        icon: <GiStairsGoal />,

    },
    {
        id: 7,
        desc: 'The facility is staffed with nurses, therapists, and area physicians dedicated to delivering quick recovery and expected results.',
        icon: <FaBriefcaseMedical />,

    },
    {
        id: 8,
        desc: 'Ability Rehab is a trusted therapy provider, known for its commitment to patient-centered care.',
        icon: <GiHeartShield />,

    },

]

const RehabCards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 lg:px-4 xl:px-36 pb-32'>
            {data.map((item) => (
                <div key={item.id} className=' w-5/6 md:w-80 lg:w-60 h-44 flex flex-col justify-center items-center rounded-3xl md:hover:scale-110 duration-500 bg-[#f97777] text-white' style={{boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                    <div className='w-max pt-2'>
                        <h4 className='pt-3 text-3xl'>{item.icon}</h4>
                    </div>
                    <p className='text-sm px-4 h-32'>{item.desc}</p>
                </div>
            ))}
        </div>
    )
}

export default RehabCards