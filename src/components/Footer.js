import React from 'react'

import rating from '../assets/CMS-4-Star-Rating.webp'
import newsweekrating from '../assets/Newsweek_US_NursingHomes2026_Logo_Hor-scaled.webp'

const Footer = () => {
    return (
        <div data-theme="dark" >
            <footer className="footer p-10 bg-base-300 text-base-content footer-test flex justify-center sm:gap-3 md:gap-30 lg:gap-60 items-center">
                <div className='gap-3 flex flex-col items-center'>
                    <a className='' href='https://www.medicare.gov/care-compare/details/nursing-home/145382/view-all?state=IL' rel="noreferrer" target='_blank'>
                        <img alt='CMS 4 Star Rating' className='sm:h-20 lg:h-28' src={rating} />
                        
                    </a>
                    <img alt='Newsweek 2026 Americas Best Nursing Home' className='sm:h-16 lg:h-20' src={newsweekrating} />
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-white" href='/'>Home</a>
                    <a className="link link-hover text-white" href='/about-us'>About us</a>
                    <a className="link link-hover text-white" href='/contact-us'>Contact</a>
                    <a className="link link-hover text-white" href='https://www.indeed.com/cmp/Meadowbrook-Bolingbrook/jobs/l-Des-Plaines,-IL' rel="noreferrer" target='_blank' >Jobs</a>

                </div>
                <div className=''>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-white" href='/rehab-programs'>Rehabilitation</a>
                    <a className="link link-hover text-white" href='/additional-services'>Additional Services</a>
                    <a className="link link-hover text-white" href='/skilled-nursing-care'>Skilled Nursing Care</a>
                    <p className="text-white" >Privacy Policy</p>
                </div>
            </footer>
            <div className='flex bg-[#15191e] justify-center text-white text-xs '>
            <p> Copyright © 2023 LEE MANOR - <a href='http://jlcwebdev.com/' rel="noreferrer" target='_blank' className="link link-hover text-[#5e636c]">Designed by JLC WebDev</a></p>
                </div>

        </div>
    )
}

export default Footer