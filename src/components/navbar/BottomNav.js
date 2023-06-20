import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

function BottomNav() {
  return (
    <>
      <Navbar>
        <Container>
          <div className='hidden sm:block w-screen'>
            <Nav className='flex text-xs md:text-base font-bold justify-between p-1'>
              <Nav.Link href='/about' >ABOUT US</Nav.Link>
              <Nav.Link href='#features' >REHABILITATION</Nav.Link>
              <Nav.Link href='#pricing' >ADDITIONAL SERVICES</Nav.Link>
              <Nav.Link href='#home' >SKILLED NURSING CARE</Nav.Link>
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