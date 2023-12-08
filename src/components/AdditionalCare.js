import React from 'react'
import LONG from '../assets/rehab/Long_Term.jpg'
import MEMORY from '../assets/rehab/memory.jpeg'
import RESPITE from '../assets/rehab/respite.jpeg'

const AdditionalCare = () => {
    return (
        <div>
            <div className='bg-[#09153d]' >
                <h1 className='text-white py-12 font-bold text-5xl' >Additional Care</h1>
            </div>

            {/* Long-term */}
            <div className='flex flex-col md:flex-row md:justify-center items-center md:px-12 py-8  ' >
                <div className='lg:w-100'>
                    <h2 className='text-start text-gray-500 px-4 py-6 text-4xl md:text-3xl ' >Long-Term Care</h2>
                    <p className='font-light px-4 text-start text-lg md:text-base' >At all of our locations, you will find our long-term care is completely customized to our residents’ needs. This is because we begin with a comprehensive assessment which is completed and reviewed by our comprehensive interdisciplinary team which includes nursing, physical/mental therapy, nutritionists, as well as activities specialists and social services professionals. The result? Your loved one will have a customized healthcare plan designed to optimize his or her quality of life.</p>
                </div>
                <img src={LONG} alt='Long-Term Care' loading="lazy" className='px-12 md:px-0 py-10 md:h-60'  />
            </div>



            {/* Memory Care */}
            <div className='flex flex-col md:flex-row md:justify-center items-center md:px-12 bg-[#09153d] py-12 text-white  ' >
                <img src={MEMORY} alt='Long-Term Care' loading="lazy" className='px-12 md:px-0 py-10 md:h-60 ' />
                <div className='lg:w-100 lg:ml-6'>
                    <h2 className='text-start px-4 py-6 text-4xl md:text-3xl font-semibold ' >Memory Care</h2>
                    <p className='font-light px-4 text-start text-lg md:text-base font-extralight' >Meadowbrook offers a safe and secure environment for individuals with Alzheimer’s or Dementia. Our unit boasts a variety of activities, specially-trained staff, and a sense of comfort you will grow to rely on.</p>
                </div>
            </div>





            {/* Respite Care */}
            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:px-12 py-8  ' >
                <div className='lg:w-100'>
                    <h2 className='text-start text-gray-500 px-4 py-6 text-4xl md:text-3xl ' >Respite Care</h2>
                    <p className='font-light px-4 text-start text-lg md:text-base' >As a devoted caregiver, you may find times when you need a temporary break. whether you’re planning a weekend getaway or a much-needed vacation — Respite Care at Meadowbrook Rehabilitation can give you the relief you need. Even if you’re staying with us for your own rehabilitation, you can trust Meadowbrook Rehabilitation to provide your loved one with personalized attention and comfort — while you take care of yourself.</p>
                </div>
                <img src={RESPITE} alt='Long-Term Care' loading="lazy" className='px-12 md:px-0 py-10 md:h-60 ' />
            </div>





        </div>
    )
}

export default AdditionalCare