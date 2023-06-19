// import { useMemo } from 'react';
import { GoLocation } from 'react-icons/go';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import CONTACT from '../assets/contact/contacus.jpg';

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
];


const ContactScreen = () => {
    //   const { isLoaded, } = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_API_KEY,

    //   });

    //   if(!isLoaded) return <span className="loading loading-spinner loading-lg"></span> 
    return (
        <div >
            {/* MAP */}
            <div  >
                <div  >
                    <div className=''>
                        <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&q=1301 Lee St, Des Plaines, IL 60018`} height="450" className='w-full' frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0" title='map'></iframe>
                    </div>
                </div>

            </div>

            {/* CONTACT CARDS */}


                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center pt-2 md:py-5 xl:px-72">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className='text-center place-items-center py-3 border w-44  md:w-44 lg:w-52 bg-[#09153d] text-white drop-shadow-2xl rounded-lg'
                            >
                                <div className="flex items-center justify-center"> {/* Add flex classes */}
                                    <h3 className='text-red-600 text-3xl'>{item.icon}</h3>
                                </div>
                                <h3 className='py-3 text-lg hidden sm:block'>{item.title}</h3>
                                <p className='text-center text-[#98bad6] text-xs flex-wrap'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


            {/* CONTACT FORM */}
            <div className='flex justify-center w-full mb-4'>
                <div className='flex justify-center rounded-lg p-5  w-max'>
                    <div>
                        <img src={CONTACT} alt='' className='hidden sm:block w-96 ' />
                    </div>
                    <div className='px-3' >
                        <div className='grid gap-3 '>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='input w-full max-w-xs bg-white border '
                            />
                            <input
                                type='text'
                                placeholder='Your Email'
                                className='input w-full max-w-xs bg-white border'
                            />
                            <input
                                type='text'
                                placeholder='Subject'
                                className='input  w-full max-w-xs bg-white border'
                            />
                            <textarea
                                className='textarea max-w-xs bg-white border'
                                placeholder='Your Message'
                            ></textarea>
                            <a className='text-center bg-[#09153d] text-white py-2 px-5 rounded-lg no-underline w-max' href='/#'>Submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// function Map() {
//     const center = useMemo(() => ({ lat: 42.033363, lng: -87.883400 }), []);
//   return (
//     <GoogleMap zoom={10} center={center}>
//         <Marker position={center} />
//     </GoogleMap>
//   );
// }



export default ContactScreen;