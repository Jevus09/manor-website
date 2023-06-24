import { Carousel } from "react-bootstrap";
import WALLY from '../assets/testimonials/wally.png'
import MARY from '../assets/testimonials/Mary.png'
import ROB from '../assets/testimonials/rob.jpg'



function Testimonials() {
    const data = [
        {
            id: 1,
            picture: WALLY,
            name: 'Wally Paredes',
            rating: '',
            review: 'My wife Barb was shuttled between Lee Manor, Lutheran General and various follow up appointments for months. Lee Manor was attentive to her numerous needs and treated her with respect and dignity. She now has other issues that will soon require her to be back in a skilled nursing facility for a long term stay. Lee Manor will be my choice. Remember, NOTHING is ever good enough for those we love. But Lee Manor will do their absolute best.',
        },
        {
            id: 2,
            picture: MARY,
            name: 'Marybethe Kelly',
            rating: '',
            review: "My mother was a resident of Lee Manor for eighteen months and we were completely happy with the care she was given.  The staff soon became extended members of our family and we always knew she was in the care of competent, capable and compassionate hands.  The nurses were never too busy to answer a question or hesitate to contact us if any concerns arose.  It is never easy to watch a love one pass but the staff handled my mother's passing with grace and kindness.  I would not hesitate to recommend Lee Manor.",
        },
        {
            id: 3,
            picture: ROB,
            name: 'Robert Nowak',
            rating: '',
            review: "It's a very nice place. I'm visiting a cousin. But, b4 i left, i read all the reviews. And, idk how many i read, but ALOT!! And, everyone's reviews where ALL POSITIVE!! Except for a former employer, WHO LIED AND SAID THEY HAVE ROACHES!! IGNORE HER.",
        },
    ]




    return (

            <div className="">
                <div className="flex flex-col justify-center items-center pt-5" >
                    <h3>Testimonials</h3>
                    <h1 className="text-center px-2">What Our Patients Says About Us</h1>
                </div>
                <div className="flex justify-center items-center w-full ">
                <Carousel className="flex justify-center items-center" controls={false} indicators={false}>
                {data.map((item) => (
                    <Carousel.Item key={item.id} className="flex" >
                        <div className=" text-white flex justify-center items-center w-screen py-5 px-32">
                            <div className="bg-[#09153d] h-96 w-screen md:w-4/6 xl:w-3/6 flex flex-col rounded-xl justify-center items-center ">
                                <img src={item.picture} alt={item.name} className="h-12 w-12 rounded-full" />
                                <h3 className="py-2">{item.name}</h3>
                                <div className="rating py-3">
                                    <input type="radio" name="rating-1" className="mask mask-star bg-[#fec42d]" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-[#fec42d]" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-[#fec42d]" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-[#fec42d]" />
                                    <input type="radio" name="rating-1" className="mask mask-star bg-[#fec42d]" />
                                </div>
                                <h3 className="w-96 text-xs px-5 text-center">{item.review}</h3>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
                </div>
            </div>

    );
}

export default Testimonials;