import {React, useState } from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'


const DropdownMenu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div>
      <Navbar bg='light' variant='light' className='border border-white'>
        <Container>
          <div className='md:hidden p-0'>
          {/*eslint-disable-next-line*/}
            <a onClick={handleShowOffcanvas} className='text-black '>
              <svg className='swap-off fill-current' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>
            </a>
          </div>
        </Container>
      </Navbar>

      <Offcanvas className='min-h-full' show={showOffcanvas} onHide={handleCloseOffcanvas} placement='top'>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='me-auto text-center'>
            <Nav.Link href='#home'>ABOUT US</Nav.Link>
            <Nav.Link href='#features'>POST-HOSPITAL REHABILITATION</Nav.Link>
            <Nav.Link href='#pricing'>ADDITIONAL SERVICES</Nav.Link>
            <Nav.Link href='#home'>SKILLED NURSING CARE</Nav.Link>
            <Nav.Link href='#pricing'>EMPLOYMENT</Nav.Link>
            <Nav.Link href='#pricing'>CONTACT</Nav.Link>
            <a href='tel:+847-635-4000' className='no-underline pb-4'>(847)-635-4000</a>
            <a className='text-base text-center bg-[#31b5aa] text-white p-3 rounded-full no-underline' href='f'>
              MAKE AN ENQUIRY
            </a>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DropdownMenu