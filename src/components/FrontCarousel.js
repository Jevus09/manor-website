import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/home.jpg';
import second from '../assets/caro1.jpg';
import third from '../assets/caro2.jpg';

function FrontCarousel() {
  return (
    <div>
      <Carousel >
        <Carousel.Item >
          <div className="d-block w-100 h-128 md:brightness-75 carimage " style={{backgroundImage: `url(${first})`}}></div>
          <div className="">
          <Carousel.Caption className="hidden sm:block ">
            <h1 className="text-7xl italic ">Our Family to Yours</h1>
            <p className="my-8 font-light">Lee Manor employs only the most qualified specialists, <br/> licensed nurses, and certified nursing assistants.<br/> Our staff will give you the peace of mind you deserve during <br/> your loved one's stay at Lee Manor.</p>
            <a href='/contact' className=" border border-line px-3 py-2 rounded-full text-white no-underline">Get in Touch</a>
    <div >
      <Carousel>
        <Carousel.Item className=''>
          <img className="d-block w-100 brightness-75 h-128" src={first} alt="First slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full ">
            <h1 className="text-center font-black">Lee Manor employs only the most qualified</h1>
            <p className="text-center font-black ">specialists, licensed nurses, and certified nursing assistants. </p>
            <p className='font-black backdrop-opacity-95' >Our staff will give you the peace of mind you deserve during your loved one's stay at Lee Manor.</p>
            <Button type="button" class="btn btn-outline-light ">Get in Touch</Button>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <div className="d-block w-100 h-128 md:brightness-75 carimage" style={{backgroundImage: `url(${second})`}}  ></div>
          <Carousel.Caption className="hidden sm:block ">
            <h1 className="text-7xl " >Therapy You Can Trust</h1>
            <p className="my-8 font-light">Ability Rehab is a comprehensive rehabilitative contract <br/> provider of Physical, Occupational and Speech-Language <br/> therapy services. </p>
            <a href='/contact' className=" border border-line px-3 py-2 rounded-full text-white no-underline">Learn More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <div className="d-block w-100 h-128 brightness-75 carimage" style={{backgroundImage: `url(${third})`}}></div>
          <Carousel.Caption className="hidden sm:block ">
            <h1 className="text-7xl ">Private Nursing</h1>
            <p className="my-8 font-light">It's about believing in those people who need help living at home. <br/> And it's what we set out to do every day.</p>
            <a href='/contact' className=" border border-line px-3 py-2 rounded-full text-white no-underline">Get in Touch</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FrontCarousel;