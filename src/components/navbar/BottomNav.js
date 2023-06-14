import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BottomNav() {
  return (
    <>
      <Navbar bg="light" variant="light" className='p-3'>
        <Container>
          <Nav className="me-auto flex space-x-12 font-bold	 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">ABOUT US</Nav.Link>
            <Nav.Link href="#pricing">DIAGNOSES</Nav.Link>
            <Nav.Link href="#home">SERVICES</Nav.Link>
            <Nav.Link href="#features">FEATURES</Nav.Link>
            <Nav.Link href="#pricing">OUR PORTFOLIO</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
          </Nav>
          <a className='bg-[#31b5aa] text-white p-3 rounded-full no-underline' href='f' >MAKE AN ENQUIRY</a>
        </Container>
      </Navbar>
    </>
  );
}

export default BottomNav;