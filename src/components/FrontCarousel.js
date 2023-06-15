import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/home.jpg';
import second from '../assets/caro1.jpg';
import third from '../assets/caro2.jpg';

function FrontCarousel() {
  return (
    <div>
      <Carousel >
        <Carousel.Item >
          <img className="d-block w-100 md:brightness-75 carimage " style={{backgroundImage: `url(${first})`}} alt="First slide" />
          <div className="">
          <Carousel.Caption className="hidden sm:block ">
            <h1 className="text-7xl italic ">Our Family to Yours</h1>
            <p className="my-8 font-light">Lee Manor employs only the most qualified specialists, <br/> licensed nurses, and certified nursing assistants.<br/> Our staff will give you the peace of mind you deserve during <br/> your loved one's stay at Lee Manor.</p>
            <a href='/contact' className=" border border-line px-3 py-2 rounded-full text-white no-underline">Get in Touch</a>
          </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100 md:brightness-75 carimage" style={{backgroundImage: `url(${second})`}} alt="Second slide" />
          <Carousel.Caption className="hidden sm:block ">
            <h1 className="text-7xl " >Therapy You Can Trust</h1>
            <p className="my-8 font-light">Ability Rehab is a comprehensive rehabilitative contract <br/> provider of Physical, Occupational and Speech-Language <br/> therapy services. </p>
            <a href='/contact' className=" border border-line px-3 py-2 rounded-full text-white no-underline">Learn More</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="d-block w-100 brightness-75 carimage" style={{backgroundImage: `url(${third})`}} alt="Third slide" />
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