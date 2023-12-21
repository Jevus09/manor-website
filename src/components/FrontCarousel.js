import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/carousel/leemanor.webp';
import second from '../assets/carousel/therapy.webp';
import third from '../assets/carousel/nursing.webp';

function FrontCarousel() {
  return (
    <div>
      <Carousel>


        <Carousel.Item >
          <div className="d-block w-100 h-128 brightness-75 carimage" style={{ backgroundImage: `url(${first})` }}></div>
          <div className="">
            <Carousel.Caption className="h-72 ">
              <h1 className="text-3xl sm:text-6xl italic  " style={{ maxHeight: '4vh' }}>Our Family to Yours</h1>
              <p className="my-8 font-light hidden sm:block ">Lee Manor employs only the most qualified specialists, <br /> licensed nurses, and certified nursing assistants.<br /> Our staff will give you the peace of mind you deserve during <br /> your loved one's stay at Lee Manor.</p>
              <a href='/contact-us' className=" border border-line px-3 py-2 rounded-full text-white no-underline hidden sm:inline-block">Get in Touch</a>
            </Carousel.Caption>
          </div>
        </Carousel.Item>


        <Carousel.Item >
          <div className="d-block w-100 h-128 brightness-75 carimage" style={{ backgroundImage: `url(${second})` }}  ></div>
          <Carousel.Caption >
            <h1 className=" text-3xl sm:text-6xl " style={{ maxHeight: '4vh' }} >Therapy You Can Trust</h1>
            <p className="my-8 font-light hidden sm:block">Ability Rehab is a comprehensive rehabilitative contract <br /> provider of Physical, Occupational and Speech-Language <br /> therapy services. </p>
            <a href='https://abilityrehab.net/' target='_blank' rel='noreferrer' className=" border border-line px-3 py-2 rounded-full text-white no-underline hidden sm:inline-block ">Learn More</a>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item >
          <div className="d-block w-100 h-128 brightness-75 carimage" style={{ backgroundImage: `url(${third})` }}></div>
          <Carousel.Caption >
            <h1 className="text-3xl sm:text-6xl" style={{ maxHeight: '10vh' }}>Excellence in Care</h1>
            <p className="my-8 font-light hidden sm:block">Lee Manor is proud to offer a superb, well rounded array of services and activities to enhance the lives of our residents.</p>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FrontCarousel;