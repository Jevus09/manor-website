import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

function BottomNav() {
  return (
    <>
      <Navbar>
        <Container>
          <div className='hidden sm:block w-screen'>
            <Nav className='flex text-xs lg:text-base font-bold justify-between p-1 text-center '>
              <Nav.Link href='/' >HOME</Nav.Link>
              <Nav.Link href='/about' >ABOUT US</Nav.Link>
              <Nav.Link href='/rehab-programs' >REHABILITATION</Nav.Link>
              <Nav.Link href='/additional-services' >ADDITIONAL SERVICES</Nav.Link>
              <Nav.Link href='/nursing-care' >SKILLED NURSING CARE</Nav.Link>
              <Nav.Link href='https://www.careerbuilder.com/browse?TNNotFound=true' target='_blank' >EMPLOYMENT</Nav.Link>
              <Nav.Link href='/contact' >CONTACT</Nav.Link>
              </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default BottomNav;