import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap';

function BottomNav() {


  return (
    <>
      <Navbar bg='light' variant='light' className='p-3'>
        <Container >
          <div className='hidden sm:block'>
            <Nav className='me-auto flex space-x-2 font-bold	 '>
              <Nav.Link href='#home'>ABOUT US</Nav.Link>
              <Nav.Link href='#features'>POST-HOSPITAL REHABILITATION</Nav.Link>
              <Nav.Link href='#pricing'>ADDITIONAL SERVICES</Nav.Link>
              <Nav.Link href='#home'>SKILLED NURSING CARE</Nav.Link>
              <Nav.Link href='#pricing'>EMPLOYMENT</Nav.Link>
              <Nav.Link href='#pricing'>CONTACT</Nav.Link>
              <a
              className=' text-base text-center bg-[#31b5aa] text-white p-3 rounded-full no-underline'
              href='f'
            >
              MAKE AN ENQUIRY
            </a>
            </Nav>

          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default BottomNav;
