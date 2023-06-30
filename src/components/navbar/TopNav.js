import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { AiOutlinePhone } from 'react-icons/ai'
import logo from '../../assets/Lee.JPG'
import DropdownMenu from './DropdownMenu'
import BottomNav from './BottomNav'

function HeaderNavbar() {
  return (
    <Navbar className='flex flex-col bg-white'>
      <Container className='test1'>
        <div className='test w-max'>
            <Navbar.Brand  href='/' >
            <img className='h-max md:h-24 lg:h-32' src={logo} alt='logo' />
            </Navbar.Brand>
          <div className='drop'>
            <DropdownMenu />
          </div>
        </div>
        <div className='d-flex align-items-center  '>
          <Navbar.Text className='d-none d-sm-flex align-items-center  me-4'>
            <AiOutlinePhone className='text-3xl text-[#3f87b9] max-[639px]:hidden' />
            <a className='text-xl max-[639px]:hidden no-underline phone'  href='tel:+847-635-4000'>
              847-635-4000
            </a>
          </Navbar.Text>
          <div className='d-none d-sm-block '>
            <div className='grid grid-flow-col gap-2 text-white max-[639px]:hidden'>
              <button className='link link-hover bg-[#3073b7] rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' className='fill-current'>
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                </svg>
              </button>
              <button className='link link-hover bg-[#3073b7] rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' className='fill-current'>
                  <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
                </svg>
              </button>
              <button className='link link-hover bg-[#3073b7] rounded-full p-2'>
                <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 24 24' className='fill-current'>
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
      <BottomNav/>
    </Navbar>
  )
}

export default HeaderNavbar