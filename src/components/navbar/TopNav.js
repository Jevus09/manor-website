import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'
import logo from '../../assets/Lee.webp'
import DropdownMenu from './DropdownMenu'
import BottomNav from './BottomNav'

function HeaderNavbar() {
  return (
    <div className='sticky top-0 z-50' >
      <Navbar className='flex flex-col bg-white  '>
        <Container className='test1'>
          <div className='test w-max'>
            <Navbar.Brand href='/' className='py-0' >
              <img className='sm:h-20 lg:h-24' src={logo} alt='logo' />
            </Navbar.Brand>
            <div className='drop'>
              <DropdownMenu />
            </div>
          </div>
          <div className='d-flex align-items-center  '>
            <Navbar.Text className='d-none d-sm-flex align-items-center  me-4'>
              <AiOutlinePhone className='text-3xl text-[#3f87b9] max-[639px]:hidden' />
              <a className='text-sm max-[639px]:hidden no-underline phone' href='tel:+847-635-4000'>
                847-635-4000
              </a>
            </Navbar.Text>
            <div className='d-none d-sm-block '>
              <div className='grid grid-flow-col gap-2 max-[639px]:hidden'>
                <a className='link link-hover text-white bg-[#3073b7] rounded-full p-2' href='mailto:admissions@leemanor.com' rel="noopener noreferrer"  >
                  <AiOutlineMail className='text-lg  duration-200' />
                </a>
                <a className='link link-hover bg-[#3073b7] text-white rounded-full p-2' href='https://www.facebook.com/LeeManorSNF' rel="noreferrer" target='_blank' >
                <ImFacebook/>
                </a>
              </div>
            </div>
          </div>
        </Container>
        <div >
        <BottomNav />
        </div>
      </Navbar>
    </div>
  )
}

export default HeaderNavbar