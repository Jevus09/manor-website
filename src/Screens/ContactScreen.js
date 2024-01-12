import React, { useRef, useState } from 'react'
import { GoLocation } from 'react-icons/go';
import { BsTelephonePlus } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFax } from 'react-icons/fa';
import CONTACT from '../assets/contact/contactus.webp';
import { Helmet } from "react-helmet"
import emailjs from '@emailjs/browser';
import { HelmetProvider } from 'react-helmet-async';


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
        description: 'pgallegos@leemanor.com',
    },
];


const ContactScreen = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const form = useRef();



    

    const sendEmail = (e) => {
        e.preventDefault();


        const formData = new FormData(form.current);
        const errors = {};
    
        // Check Full Name
        const fullName = formData.get("first_name");
        if (!fullName) {
          errors.first_name = "Full Name is required";
        }

            // Check Email
        const email = formData.get("email");
        if (!email) {
        errors.email = "Email is required";
        } else if (!isValidEmail(email)) {
        errors.email = "Invalid email";
        }

        // Check Phone Number
        const phone = formData.get("phone");
        if (!phone) {
        errors.phone = "Phone Number is required";
        } else if (!isValidPhoneNumber(phone)) {
        errors.phone = "Phone number must be 10 digits";
        }


        const message = formData.get("message");
        if (!message) {
        errors.message = "Message is required";
        }

        if (Object.keys(errors).length === 0) {
            emailjs
              .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAIL_KEY
              )
              .then(
                (result) => {
                  console.log(result.text);
                  setIsFormSubmitted(true);
                  form.current.reset();
                  setTimeout(() => {
                    setIsFormSubmitted(false);
                  }, 5000);
                },
                (error) => {
                  console.log(error.text);
                }
              );
          } else {
            setFormErrors(errors);
          }
    };;


    const isValidEmail = (email) => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
      };
    
      const isValidPhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
      };

    return (
        <div  >
            <HelmetProvider>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lee Manor | Contact Us</title>
                </Helmet>
            </HelmetProvider>
            {/* MAP */}
            <div  >
                <div  >
                    <div className=''>
                        <iframe
                            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY}&center=42.029507646164156,-87.8934861419573&zoom=15&q=place_id:ChIJU4ev4ae3D4gR00c-GPjM4i8&`}
                            height="450"
                            className='w-full'
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="-1"
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
                            className='text-center place-items-center  py-3 border w-44  md:w-44 lg:w-52 bg-[#09153d] text-white drop-shadow-2xl rounded-lg animate__animated animate__fadeInUp' style={{ boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' }}
                        >
                            <div className="flex items-center justify-center">
                                <h3 className='text-red-600 text-3xl'>{item.icon}</h3>
                            </div>
                            <h3 className='py-3 text-lg hidden sm:block'>{item.title}</h3>
                            <p className='text-center text-[#98bad6] text-sm flex-wrap'>{item.description}</p>
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
                        <form ref={form} onSubmit={sendEmail} className='w-60 grid gap-3 justify-items-center  '>
                            <input
                                type='text'
                                placeholder='Full Name:'
                                name="first_name"
                                className='input w-full max-w-xs bg-white border'
                                
                            />
                            {formErrors.first_name && (
                                <div className='text-red-500'>
                                    {formErrors.first_name}
                                    </div>
                                )}
                            <input
                                type='text'
                                placeholder='E-mail:'
                                className='input w-full max-w-xs bg-white border'
                                name="email"
                                
                            />
                            {formErrors.email && (
                                <div className='text-red-500'>
                                    {formErrors.email}
                                    </div>
                                )}
                            <input
                                type='number'
                                name='phone'
                                inputMode='numeric'
                                placeholder='Phone Number:'
                                className='input  w-full max-w-xs bg-white border'
                            />
                            {formErrors.phone && (
                                <div className='text-red-500'>
                                    {formErrors.phone}
                                    </div>
                                )}
                            <textarea
                                className='textarea w-full max-w-xs bg-white border text-start'
                                name="message"
                                placeholder='Message:'
                                
                            ></textarea>
                            {formErrors.message && (
                                <div className='text-red-500'>
                                    {formErrors.message}
                                    </div>
                                )}
                            <button className='flex bg-[#09153d] text-white py-2 px-5 rounded-lg no-underline w-max' >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center bg-[#ebf3fc]' >
            <div className="alert alert-success flex items-center justify-center w-128" style={{ display: isFormSubmitted ? 'flex' : 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span >Thank you for your inquiry! We will be in touch soon.</span>
            </div>
        </div>
        </div>
    );
};


export default ContactScreen;