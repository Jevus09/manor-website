import React from 'react'

const Footer = () => {
    return (
        <div >
            <footer className="footer p-10 bg-base-300 text-base-content footer-test">
                <div>
                    <span className="footer-title text-white">Services</span>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Branding</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Design</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Marketing</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-white">Company</span>
                    <a className="link link-hover text-[#5e636c]" href='/#'>About us</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Contact</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Jobs</a>
                    <a className="link link-hover text-[#5e636c]" href='/#'>Press kit</a>
                </div>
                <div className=''>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-96 bg-[#5e636c] ">
                        <label className="label">
                            <span className="label-text ">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-white" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default Footer