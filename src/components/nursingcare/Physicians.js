import React from 'react'
import { Data } from './Data'





const Physicians = () => {
    return (
        <div>
            {/* Title/Description */}
            <div className='flex w-full justify-evenly items-center pt-12 text-center'>
                <h2>BOARD CERTIFIED PHYSICIANS ATTEND AND/OR CONSULT</h2>
            </div>
            <div className='flex justify-center items-center py-6  '>
                <div
                    className='bg-white w-5/6 md:w-3/6 py-4 flex flex-col justify-center items-center'
                    style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
                >
                    <p className=' w-4/6 text-center '>
                        Lee Manor has trained and registered nurses, licensed practicional nurses, certified nurse assistants, and therapists that provide care with compassion and dignity, while trying to maintain independence
                    </p>
                </div>
            </div>

            {/* PHYSICIANS */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center place-content-center px-4 xl:px-20 py-20 ' >
                {Data.map((item) =>
                    item.id % 2 === 0 ? (
                        <div key={item.id} className='w-11/12 h-16 flex justify-between items-center bg-white text-end md:hover:scale-110 duration-500 ' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
                            <div className='h-full w-1/6 lg:w-2/6 2xl:w-1/6 flex justify-center items-center bg-amber-500 text-white  '>
                                <h4>{item.icon}</h4>
                             </div>
                            <div className='h-full flex items-center w-4/6 '>
                                <p className='w-full pr-6'>{item.name}</p>
                             </div>
                        </div>
                    ) : (
                        <div key={item.id} className='w-11/12 h-16 flex justify-between items-center bg-white md:hover:scale-110 duration-500' style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}>
                            <div className='h-full flex items-center w-4/6'>
                                <p className='w-full pl-6 '>{item.name}</p>
                            </div>
                            <div className='h-full w-1/6 lg:w-2/6 2xl:w-1/6  flex justify-center items-center bg-blue-500 text-white'>
                                <h4 className='' >{item.icon}</h4>
                            </div>
                        </div>
                    )
                )}
            </div>



            {/* Bottom Description */}
            <div className='flex justify-center items-center py-6  '>
                <div
                    className='bg-white w-5/6 md:w-3/6 py-4 flex flex-col justify-center items-center'
                    style={{ boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px' }}
                >
                    <p className=' w-4/6 text-center'>
                        The staff at Lee Manor is committed to providing quality healthcare services in a clean, safe and comfortable surroundings reminiscent of home. We strive to provide our care with compassion and dignity, while trying to maintain independence.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Physicians
