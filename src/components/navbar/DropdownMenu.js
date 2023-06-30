import {React, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'


const DropdownMenu = () => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <div>
      <Navbar bg='light' variant='light' className='border border-white'>
        <Container>
          <div className='min-[640px]:hidden p-0'>
          {/*eslint-disable-next-line*/}
            <a onClick={handleShowOffcanvas} className='text-black '>
              <svg className='swap-off fill-current' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'>
                <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
              </svg>
            </a>
          </div>
        </Container>
      </Navbar>

      <Offcanvas style={{height: '65vh'}} className='' show={showOffcanvas} onHide={handleCloseOffcanvas} placement='top'>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body >
          <Nav className='me-auto text-center' >
            <Nav.Link href='/' >HOME</Nav.Link>
            <Nav.Link href='/about'>ABOUT US</Nav.Link>
            <Nav.Link href='/rehab-programs'>POST-HOSPITAL REHABILITATION</Nav.Link>
            <Nav.Link href='/additional-services'>ADDITIONAL SERVICES</Nav.Link>
            <Nav.Link href='/nursing-care'>SKILLED NURSING CARE</Nav.Link>
            <Nav.Link href='https://www.careerbuilder.com/browse?TNNotFound=true' target='_blank'>EMPLOYMENT</Nav.Link>
            <Nav.Link href='/contact'>CONTACT</Nav.Link>
            <a href='tel:+847-635-4000' className='no-underline text-[#09153d] pb-4'>(847)-635-4000</a>
            <a className='text-base text-center bg-[#09153d] text-white p-3 rounded-full no-underline' href='/#'>
              MAKE AN ENQUIRY
            </a>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default DropdownMenu