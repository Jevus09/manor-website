import Carousel from 'react-bootstrap/Carousel';
import first from '../assets/home.jpg';
import second from '../assets/caro1.jpg';
import third from '../assets/caro2.jpg';

function FrontCarousel() {
  return (
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
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 brightness-75 h-128" src={second} alt="Second slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h1 className="text-center font-black">Therapy Specialists improving Functional Outcomes</h1>
            <Button type="button" class="btn btn-outline-light ">Learn More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 brightness-75 h-128" src={third} alt="Third slide" />
          <Carousel.Caption className="flex flex-col items-center justify-center h-full">
            <h1 className="text-center">Private Nursing</h1>
            <p className="text-center">It's about believing in those people who need help living at home.</p>
            <p>And it's what we set out to do every day.</p>
            <Button type="button" class="btn btn-outline-light ">Get in Touch</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FrontCarousel;