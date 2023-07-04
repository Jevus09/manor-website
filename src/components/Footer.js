import React from 'react'

const Footer = () => {
    return (
        <div className='' >
            <footer className="footer p-10 bg-base-300 text-base-content footer-test flex justify-between md:justify-evenly items-center">
            <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-[#5e636c]" href='/'>Home</a>
                    <a className="link link-hover text-[#5e636c]" href='/about'>About us</a>
                    <a className="link link-hover text-[#5e636c]" href='/contact'>Contact</a>
                    <a className="link link-hover text-[#5e636c]" href='https://www.careerbuilder.com/browse?TNNotFound=true' rel="noreferrer" target='_blank' >Jobs</a>

                </div>
                <div>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-[#5e636c]" href='/rehab-programs'>Rehabilitation</a>
                    <a className="link link-hover text-[#5e636c]" href='/additional-services'>Additional Services</a>
                    <a className="link link-hover text-[#5e636c]" href='/nursing-care'>Skilled Nursing Care</a>
                    <a href='jlcwebdev.com' className="link link-hover text-[#5e636c]"> Designed by JLCWebDev</a>
                </div>
            </footer>


        </div>
    )
}

export default Footer