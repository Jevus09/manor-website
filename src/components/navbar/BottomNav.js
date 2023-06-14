import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function BottomNav() {
  return (
    <>
      <Navbar bg='light' variant='light' className='p-3'>
        <Container>
          <div className='md:hidden flex items-center justify-center'>
            <Dropdown className='d-inline mx-2'>
              <Dropdown.Toggle
                id='dropdown-autoclose-true'
                className='text-center'
              >
                Default Dropdown
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
                <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
                <Dropdown.Item href='#'>Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='hidden sm:block'>
            <Nav className='me-auto flex space-x-2 font-bold	 '>
              <Nav.Link href='#home'>ABOUT US</Nav.Link>
              <Nav.Link href='#features'>POST-HOSPITAL REHABILITATION</Nav.Link>
              <Nav.Link href='#pricing'>ADDITIONAL SERVICES</Nav.Link>
              <Nav.Link href='#home'>SKILLED NURSING CARE</Nav.Link>
              <Nav.Link href='#pricing'>EMPLOYMENT</Nav.Link>
              <Nav.Link href='#pricing'>CONTACT</Nav.Link>
            </Nav>
            <a
              className=' text-base text-center bg-[#31b5aa] text-white p-3 rounded-full no-underline'
              href='f'
            >
              MAKE AN ENQUIRY
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default BottomNav
