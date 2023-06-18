import React from 'react'
import MAP from '../assets/contact/map.PNG'
import { GrLocation } from 'react-icons/gr'
import { BsTelephonePlus } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { BsClock } from 'react-icons/bs'
import CONTACT from '../assets/contact/contacus.jpg'

const data = [
    {
        id: 1,
        icon: <GrLocation />,
        title: 'Our Location',
        description: '1301 Lee St, Des Plaines, IL 60018',
    },
    {
        id: 2,
        icon: <BsTelephonePlus />,
        title: 'Phone Number',
        description: '847-635-4000',
    },
    {
        id: 3,
        icon: <AiOutlineMail />,
        title: 'Email Us',
        description: 'Admin@example.com',
    },
    {
        id: 4,
        icon: <BsClock />,
        title: 'Working Hours',
        description: 'Mon - Sat: 9:00 - 5:00',
    },
]

const ContactScreen = () => {
    return (
        <div>
            {/* MAP */ }
            <div>
                <img src={MAP} alt='' className='grayscale w-full' />
            </div>

             {/* CONTACT CARDS */ }

            <div className='flex flex-col md:flex-row md:justify-evenly py-5'>
                {data.map((item) => (
                    <div
                        key={item.id}
                        className='grid grid-cols-1 text-center place-items-center w-fit p-5 border bg-[#31b5aa] text-white rounded-lg '
                    >
                        <h3 className='text-black text-5xl'>{item.icon}</h3>
                        <h3 className='py-3'>{item.title}</h3>
                        <p className='text-center w-72 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>

            {/* CONTACT FORM */ }

            <div className='flex justify-center w-full' >
                <div className='flex justify-center border rounded-lg p-5 w-max'>
                    <div>
                        <img src={CONTACT} alt='' className='w-96' />
                    </div>
                    <div className='flex flex-col px-4' >
                        <input
                            type='text'
                            placeholder='Your Name'
                            className='input input-ghost w-full max-w-xs'
                        />
                        <input
                            type='text'
                            placeholder='Your Email'
                            className='input input-ghost w-full max-w-xs'
                        />
                        <input
                            type='text'
                            placeholder='Subject'
                            className='input input-ghost w-full max-w-xs'
                        />
                        <textarea className="textarea textarea-ghost max-w-xs" placeholder="Your Message"></textarea>
                        <a className='text-center bg-[#31b5aa] text-white py-2 px-5 rounded-lg no-underline w-max' href='/#'>Submit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen
