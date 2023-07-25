import { GoLocation } from 'react-icons/go';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import CONTACT from '../assets/contact/contactus.webp';



const data = [
    {
        id: 1,
        icon: <GoLocation />,
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
        icon: <FaFax />,
        title: 'Fax Number',
        description: '847-827-5796',

    },
    {
        id: 4,
        icon: <AiOutlineMail />,
        title: 'Email Us',
        description: 'admissions@leemanor.com',
    },
];


const ContactScreen = () => {

    return (
        <div >
            {/* MAP */}
            <div  >
                <div  >
                    <div className=''>
                    <iframe 
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&center=42.029507646164156,-87.8934861419573&zoom=15&q=place_id:ChIJU4ev4ae3D4gR00c-GPjM4i8&`} 
                    height="450" 
                    className='w-full' 
                    frameborder="0" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    aria-hidden="false" 
                    tabindex="-1" 
                    title='map' 
                    ></iframe>
                    </div>
                </div>
            </div>


            {/* CONTACT CARDS */}
            <div className="bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center pt-2 md:py-5 2xl:px-72" >
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className='text-center place-items-center py-3 border w-44  md:w-44 lg:w-52 bg-[#09153d] text-white drop-shadow-2xl rounded-lg animate__animated animate__fadeInUp' style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}
                        >
                            <div className="flex items-center justify-center">
                                <h3 className='text-red-600 text-3xl'>{item.icon}</h3>
                            </div>
                            <h3 className='py-3 text-lg hidden sm:block'>{item.title}</h3>
                            <p className='text-center text-[#98bad6] text-xs flex-wrap'>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='text-center animate__animated animate__fadeInUp pt-5 mb-0 '>Contact Us</h1>
                </div>
            </div>


            {/* CONTACT FORM */}
            <div className='flex justify-center w-full bg-[linear-gradient(_#FFFFFF_25%,_#ebf3fc_75%)] animate__animated animate__fadeInUp'>
                <div className='flex justify-center rounded-lg p-5  w-full'>
                    <div>
                        <img src={CONTACT} alt='' className='hidden sm:block w-96 ' style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
                    </div>
                    <div className='px-3 ' >
                        <div className='w-60 grid gap-3 justify-items-center  '>
                            <input
                                type='text'
                                placeholder='Name:'
                                className='input w-full max-w-xs bg-white border '
                            />
                            <input
                                type='text'
                                placeholder='E-mail:'
                                className='input w-full max-w-xs bg-white border'
                            />
                            <input
                                type='number'
                                inputMode='numeric'
                                placeholder='Phone:'
                                className='input  w-full max-w-xs bg-white border'
                            />
                            <textarea
                                className='textarea w-full max-w-xs bg-white border text-start'
                                placeholder='Message:'
                            ></textarea>
                            <a className='flex bg-[#09153d] text-white py-2 px-5 rounded-lg no-underline w-max' href='/#'>Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactScreen;