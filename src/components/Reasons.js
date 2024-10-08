import React from 'react'
import { TbTilde } from 'react-icons/tb';
import RES from '../assets/reasons/resident.webp'
import EXP from '../assets/reasons/experience.webp'
import STAFF from '../assets/reasons/staff.webp'
import { AnimationOnScroll } from 'react-animation-on-scroll'


const Reasons = () => {
    const data = [
        {
            id: 1,
            image: EXP,
            title: '35+ Years of Experience',
            description: 'Open since 1979, Lee Manor has a proven track record of providing the highest standard of compassionate care for your loved ones. The Lee Manor name is synonymous with dignified, home-like care.'
        },
        {
            id: 2,
            image: STAFF,
            title: 'Highly-Qualified Staff',
            description: "Lee Manor employs only the most qualified specialists, licensed nurses, and certified nursing assistants. Our staff will give you the peace of mind you deserve during your loved one's stay at Lee Manor"
        },
        {
            id: 3,
            image: RES,
            title: `Unparalleled Resident Services`,
            description: 'Lee Manors numerous resident services ensure that your loved ones feel welcome in our community and create a home-like environment for residents to enjoy during their stay with us.',
        },
    ];

    return (
        <div>
            <div className="h-full bg-[#fff9f6] pb-5">
                <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
                <h1 className="flex items-center justify-center pt-16 md:pb-12">Why Lee Manor?</h1>
                </AnimationOnScroll>
                <div className="flex flex-col md:flex-row md:justify-center">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 text-center place-items-center p-4"
                        >
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true} >
                            <img src={item.image} alt={item.title} loading="lazy" className='w-96 my-12 px-8 md:px-0 rounded-3xl'  />
                            </AnimationOnScroll>
                            <h3>{item.title}</h3>
                            <TbTilde className='text-[#3f87b9] text-xl my-2' />
                            <p className='text-center w-72'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Reasons