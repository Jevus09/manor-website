import React from 'react'

const Footer = () => {
    return (
        <div data-theme="dark" >
            <footer className="footer p-10 bg-base-300 text-base-content footer-test flex justify-center gap-20 md:gap-60 items-center">
            <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-[#5e636c]" href='/'>Home</a>
                    <a className="link link-hover text-[#5e636c]" href='/about'>About us</a>
                    <a className="link link-hover text-[#5e636c]" href='/contact'>Contact</a>
                    <a className="link link-hover text-[#5e636c]" href='https://www.indeed.com/cmp/Meadowbrook-Bolingbrook/jobs/l-Des-Plaines,-IL' rel="noreferrer" target='_blank' >Jobs</a>

                </div>
                <div>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-[#5e636c]" href='/rehab-programs'>Rehabilitation</a>
                    <a className="link link-hover text-[#5e636c]" href='/additional-services'>Additional Services</a>
                    <a className="link link-hover text-[#5e636c]" href='/nursing-care'>Skilled Nursing Care</a>
                    <a className="link link-hover text-[#5e636c]" href='/privacy-policy'>Privacy Policy</a>
                </div>
            </footer>
            <div className='flex bg-[#15191e] justify-center text-white text-xs '>
            <p> Copyright © 2023 LEE MANOR - <a href='http://jlcwebdev.com/' rel="noreferrer" target='_blank' className="link link-hover text-[#5e636c]">Designed by JLC WebDev</a></p>
                </div>

        </div>
    )
}

export default Footer