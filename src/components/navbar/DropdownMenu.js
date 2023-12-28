import {React, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { AiOutlineMail } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'


const DropdownMenu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div>
      <Navbar  variant='light' className='border border-white'>
        <Container>
          <div className='min-[701px]:hidden p-0 sm:ml-44'>
          {/*eslint-disable-next-line*/}
            <a onClick={handleShowOffcanvas} className='text-black '>
              <svg className='swap-off fill-current' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>
            </a>
          </div>
        </Container>
      </Navbar>

      <Offcanvas style={{height: '66vh'}} show={showOffcanvas} onHide={handleCloseOffcanvas} placement='top'>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className='py-0' >
          <Nav className='me-auto text-center flex justify-center items-center' >
            <Nav.Link href='/' className='py-2' >HOME</Nav.Link>
            <Nav.Link href='/about-us'  className='py-2'>ABOUT US</Nav.Link>
            <Nav.Link href='/rehab-programs' className='py-2'>POST-HOSPITAL REHABILITATION</Nav.Link>
            <Nav.Link href='/additional-services' className='py-2'>ADDITIONAL SERVICES</Nav.Link>
            <Nav.Link href='/skilled-nursing-care' className='py-2'>SKILLED NURSING CARE</Nav.Link>
            <Nav.Link href='https://www.indeed.com/cmp/Meadowbrook-Bolingbrook/jobs/l-Des-Plaines,-IL' target='_blank' className='py-2'>EMPLOYMENT</Nav.Link>
            <Nav.Link href='/contact-us' className='py-2'>CONTACT</Nav.Link>
            <a href='tel:+847-635-4000' className='no-underline bg-[#09153d] w-max text-white px-3 py-2 w-64 rounded-2xl'>(847)-635-4000</a>
            <div className='flex gap-5 justify-center pt-4'>
                <a className='link link-hover bg-[#3073b7] rounded-full p-2' href='mailto:admissions@leemanor.com' rel="noopener noreferrer"  >
                  <AiOutlineMail className='text-white text-3xl' />
                </a>
                <a className='link link-hover bg-[#3073b7] text-white rounded-full p-2' href='https://www.facebook.com/LeeManorSNF' rel="noreferrer" target='_blank' >
                <ImFacebook className='text-3xl'/>
                </a>
                <a className='link link-hover bg-[#3073b7] text-white rounded-full p-2' href='https://www.linkedin.com/company/lee-manor' rel="noreferrer" target='_blank' >
                <FaLinkedinIn className='text-3xl'/>
                </a>
              </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DropdownMenu