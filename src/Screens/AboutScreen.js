import React from 'react'
import HISTORY from '../assets/aboutus/buildng.PNG'
import BANNER from '../assets/aboutus/aboutbanner.jpg'
import LIVING from '../assets/aboutus/livin.jpg'
import MEDICAL from '../assets/aboutus/Medical.jpg'
import REHAB from '../assets/aboutus/Rehabilitation.jpg'
import SPECI from '../assets/aboutus/Specialized.jpg'


const AboutScreen = () => {
    return (
        <div className='bg-[linear-gradient(_#FFFFFF_25%,_#ebf3fc_75%)]  '>

            {/*Banner*/}
            <div className='pb-5'>
                <div className='h-80 bg-center bg-cover font-bold ' style={{ backgroundImage: `url(${BANNER})`, filter: 'brightness(50%)' }}>

                    <h1 className='absolute inset-0 flex items-center justify-center' >About Us</h1>

                </div>
            </div>


            <div className='' >
                <div>
                    {/* History  */}
                    <div className="hero min-h-full animate__animated animate__fadeInLeftBig ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={HISTORY} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                            <div className='text-center '>
                                <h1 className="text-5xl font-bold">Our History</h1>
                                <p className="py-6 text-center">Lee Manor Rehabilitation & Skilled Nursing Facility has been a trusted provider of dignified, home-like care for over 30 years. Since opening our doors in 1979, our family-owned facility has prioritized the well-being of our residents, making us a reliable choice for quality care.</p>
                            </div>
                        </div>
                    </div>


                    {/* Living Spaces */}
                    <div className="hero min-h-full animate__animated animate__fadeInRightBig animate__delay-1s py-4">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={LIVING} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                            <div className='text-center'>
                                <h1 className="text-5xl font-bold">Comfortable Living Spaces</h1>
                                <p className="py-6">We believe in creating an environment that feels like home. Our sunlit patient rooms and beautiful dining rooms offer all the comforts and conveniences one would expect. Residents can enjoy a range of amenities, including a bus service for group outings, a beauty and barber shop, an ice cream parlor, and rooms wired for satellite TV. We even provide wireless internet access for those who want to stay connected.</p>
                            </div>
                        </div>
                    </div>


                    {/* Comprehensive Rehabilitation Services */}
                    <div className="hero min-h-full animate__animated animate__fadeInLeftBig animate__delay-2s ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={REHAB} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                            <div className='text-center'>
                                <h1 className="text-5xl font-bold">Comprehensive Rehabilitation Services</h1>
                                <p className="py-6 text-center">At Lee Manor, we offer sub-acute, short-term rehabilitation services aimed at helping patients regain their independence and return home as quickly as possible. Our dedicated team provides physical, occupational, respiratory, speech, and wound care therapy seven days a week. To enhance the rehabilitation process, we've designed an innovative "Rehab Room" with a model kitchen, bath, and even a car, allowing residents to practice essential skills and build confidence for a successful recovery.</p>
                            </div>
                        </div>
                    </div>


                    {/* Specialized Care Programs */}
                    <div className="hero min-h-full animate__animated animate__fadeInRightBig animate__delay-4s py-4">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={SPECI} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                            <div className='text-center'>
                                <h1 className="text-5xl font-bold">Specialized Care Programs</h1>
                                <p className="py-6">We understand the unique needs of individuals facing Alzheimer's disease and other dementia-related issues. That's why we have an entire floor dedicated to our Alzheimer's/dementia support program. Our specially trained staff has years of experience in dealing with these conditions, ensuring compassionate and knowledgeable care. Additionally, we provide 24/7 skilled nursing care and offer a hospice program that emphasizes maintaining patients' independence while delivering care with compassion and dignity.</p>
                            </div>
                        </div>
                    </div>



                    {/*Extensive Medical Services  */}
                    <div className="hero min-h-full animate__animated animate__fadeInLeftBig animate__delay-4s pb-4 ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={MEDICAL} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                            <div className='text-center'>
                                <h1 className="text-5xl font-bold">Our Extensive Medical Services</h1>
                                <p className="py-6 text-center">Lee Manor goes beyond basic care by providing access to a range of medical services within our facility. Patients and residents have the convenience of on-site vision care, dental services, dermatology, psychology, psychiatry, audiology, and podiatry. We also offer additional services such as pharmacy support, portable X-ray, arterial/venous doppler, social work services, personalized nutritional services, and routine labs. This comprehensive approach ensures that all aspects of our residents' health and well-being are addressed in one location.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>






        </div>
    )
}

export default AboutScreen