import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

function BottomNav() {
  return (
    <>
      <Navbar className='py-0'>
        <Container className=''>
          <div className='hidden min-[701px]:block w-screen'>
            <Nav className='flex text-xs lg:text-sm xl:text-base font-bold justify-between p-1 text-center sticky top-0'>
              <Nav.Link href='/' >HOME</Nav.Link>
              <Nav.Link href='/about-us' >ABOUT US</Nav.Link>
              <Nav.Link href='/rehab-programs' >REHABILITATION</Nav.Link>
              <Nav.Link href='/additional-services' >ADDITIONAL SERVICES</Nav.Link>
              <Nav.Link href='/skilled-nursing-care' >SKILLED NURSING CARE</Nav.Link>
              <Nav.Link href='https://www.indeed.com/cmp/Meadowbrook-Bolingbrook/jobs/l-Des-Plaines,-IL' target='_blank' >EMPLOYMENT</Nav.Link>
              <Nav.Link href='/contact-us' >CONTACT</Nav.Link>
              </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BottomNav;