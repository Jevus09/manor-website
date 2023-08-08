import React from 'react'
import HISTORY from '../assets/aboutus/buildng.webp'
import BANNER from '../assets/aboutus/aboutbanner.webp'
import LIVING from '../assets/aboutus/bedroom.jpg'
import MEDICAL from '../assets/aboutus/Medical.webp'
import REHAB from '../assets/aboutus/Rehabilitation.webp'
import SPECI from '../assets/aboutus/Specialized.webp'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Helmet } from "react-helmet"
import { HelmetProvider } from 'react-helmet-async'



const data = [
    {
        id: 1,
        image: SPECI,
        title: 'Specialized Care Programs',
        desc: "We cater to individuals with Alzheimer's and dementia, offering a dedicated floor and trained staff. With 24/7 skilled nursing care, our hospice program prioritizes independence, compassion, and dignity for patients.",
    },
    {
        id: 2,
        image: MEDICAL,
        title: 'Extensive Medical Services',
        desc: "Lee Manor offers comprehensive medical services on-site, including vision, dental, dermatology, psychology, psychiatry, audiology, and podiatry. Additional support like pharmacy, X-ray, doppler, social work, nutrition, and labs are also available.",
    },
    {
        id: 3,
        image: LIVING,
        title: 'Comfortable Living Spaces',
        desc: "Our homelike environment features sunlit patient rooms, elegant dining areas, and various amenities such as a bus service, beauty/barber shop, ice cream parlor, and satellite TV connections. Stay connected with wireless internet access.",
    },
]




const AboutScreen = () => {
    return (
        <div className=''>
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lee Manor | About Us</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </HelmetProvider>

            {/*Banner*/}
            <div className='pb-5'>
                <div className=' h-60 md:h-80 bg-center bg-cover font-bold ' style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${BANNER})` }}>
                    <div>
                        <h1 className='pt-32 flex items-center justify-center text-white' >About Us</h1>
                    </div>
                </div>
            </div>


            {/* Top two cards  */}

            <div>
                <div className='flex flex-col w-full justify-evenly items-center pb-20 text-center'>
                    <h4 className='text-sm' >Trusted Home-Like Rehabilitation & Skilled Nursing</h4>
                    <h2>Compassionate Care and Comprehensive Therapies for Independence</h2>
                </div>
                <div className='flex justify-center items center'>
                    <div className='flex flex-col md:flex-row  items-center h-max  ' >
                        <div className='flex flex-col justify-evenly lg:px-20 items-center h-96 w-full'>
                            <img src={HISTORY} alt='Lee Manor' className='h-52 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
                            <div className='flex flex-col justify-center items-center' >
                                <h4 className=' py-2' >Our History</h4>
                                <p className='text-xs text-center w-72  ' >Lee Manor Rehabilitation & Skilled Nursing Facility has been a trusted provider of dignified, home-like care for over 30 years. Since opening our doors in 1979, our family-owned facility has prioritized the well-being of our residents, making us a reliable choice for quality care.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-evenly items-center lg:px-20 h-max w-full'>
                            <img src={REHAB} alt='rehab' className='h-52' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
                            <div className='flex flex-col justify-center items-center' >
                                <h4 className='text-center text-base py-2'>Comprehensive Rehabilitation Services</h4>
                                <p className='text-xs text-center w-96  ' >At Lee Manor, we offer sub-acute, short-term rehabilitation services aimed at helping patients regain their independence and return home as quickly as possible. Our dedicated team provides physical, occupational, respiratory, speech, and wound care therapy seven days a week. To enhance the rehabilitation process, we've designed an innovative "Rehab Room" with a model kitchen, bath, and even a car, allowing residents to practice essential skills and build confidence for a successful recovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Bottom three Cards */}

            <div className='bg-[#f5efed]'>
                <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                    <div className='flex flex-col justify-center items-center py-12 text-center' >
                        <h4 className='text-sm md:text-base' >Caring Haven for Alzheimer's & Dementia Patients</h4>
                        <h2>Providing Specialized Care, Comfort and Community</h2>
                    </div>
                </AnimationOnScroll>
                <div className='flex flex-col md:flex-row' >
                    {data.map((item) => (
                        <div key={item.id} className='flex flex-col justify-evenly items-center h-96 w-full'>
                            <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
                                <img src={item.image} alt={item.title} className='h-52' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
                            </AnimationOnScroll>
                            <div className='flex flex-col justify-center items-center' >
                                <h4>{item.title}</h4>
                                <p className='text-xs text-center w-72  ' >{item.desc}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AboutScreen