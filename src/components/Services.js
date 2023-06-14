import React from 'react'
import {TfiWheelchair} from 'react-icons/tfi'
import {FaUserNurse} from 'react-icons/fa'
import {MdMedicalServices} from 'react-icons/md'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {GiBrain} from 'react-icons/gi'

const data = [
    {
    id: 1,
    icon: <TfiWheelchair/> ,
    title:'Rehab Program' ,
    text: 'Wound Care Program',
    text2: 'Congestive Heart Failure Program',
},
{
    id: 2,
    icon: <FaUserNurse/> ,
    title:'Skilled Nursing Care' ,
    text: '24 Hour Skilled Nursing Care' ,
    text2: ' Short And Long-Term Rehabilitation'
},
{
    id: 3,
    icon: <MdMedicalServices/> ,
    title:'Additional Services' ,
    text: 'Personalized Nutritional Services' ,
    text2: 'Social Work Services'
},
{
    id: 4,
    icon: <FaHandHoldingHeart/> ,
    title:'Resident Benefits' ,
    text: 'Personal concierge service' ,
    text2: 'Private rooms, private shower/bath'
},
{
    id: 5,
    icon: <GiBrain/> ,
    title:'Stroke Recovery' ,
    text: 'Motor-skill exercises.' ,
    text2: 'Constraint-induced therapy'
},


]

const Services = () => {



  return (
<div className='flex items-center justify-center bg-[#3f87b9] h-80 space-x-32'>
  {data.map((item) => (
    <div className='text-center flex flex-col items-center'>
      <h3 className='bg-white p-3 rounded-full text-[#3f87b9]'>{item.icon}</h3>
      <h5 className='text-white text-base font-bold'>{item.title}</h5>
      <p className='text-[#98bad6] text-sm font-thin'>{item.text}<br/>{item.text2}</p>

    </div>
  ))}
</div>
  )
}

export default Services