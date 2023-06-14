import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BottomNav() {
  return (
    <>
      <Navbar bg="light" variant="light" className='p-3'>
        <Container>
          <Nav className="me-auto flex space-x-2 font-bold	 ">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#features">POST-HOSPITAL REHABILITATION</Nav.Link>
            <Nav.Link href="#pricing">ADDITIONAL SERVICES</Nav.Link>
            <Nav.Link href="#home">SKILLED NURSING CARE</Nav.Link>
            <Nav.Link href="#pricing">EMPLOYMENT</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
          <a className='bg-[#31b5aa] text-white p-3 rounded-full no-underline' href='f' >MAKE AN ENQUIRY</a>
        </Container>
      </Navbar>
    </>
  );
}

export default BottomNav;