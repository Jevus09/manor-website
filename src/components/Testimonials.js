import WALLY from '../assets/testimonials/wally.webp'
import MARY from '../assets/testimonials/Mary.webp'
import ROB from '../assets/testimonials/rob.webp'
import TARA from '../assets/testimonials/tara.webp'
import KING from '../assets/testimonials/king.webp'
import GAYLE from '../assets/testimonials/GAYLE.webp'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {RiDoubleQuotesL} from 'react-icons/ri'
import {MdOutlineStar} from 'react-icons/md'




function Testimonials() {

    const data = [
        {
            id: 1,
            picture: WALLY,
            name: 'Wally ',
            rating: '',
            review: 'My wife Barb was shuttled between Lee Manor, Lutheran General and various follow up appointments for months. Lee Manor was attentive to her numerous needs and treated her with respect and dignity. She now has other issues that will soon require her to be back in a skilled nursing facility for a long term stay. Lee Manor will be my choice. Remember, NOTHING is ever good enough for those we love. But Lee Manor will do their absolute best.',
        },
        {
            id: 2,
            picture: MARY,
            name: 'Marybethe ',
            rating: '',
            review: "My mother was a resident of Lee Manor for eighteen months and we were completely happy with the care she was given.  The staff soon became extended members of our family and we always knew she was in the care of competent, capable and compassionate hands.  The nurses were never too busy to answer a question or hesitate to contact us if any concerns arose.  It is never easy to watch a love one pass but the staff handled my mother's passing with grace and kindness.  I would not hesitate to recommend Lee Manor.",
        },
        {
            id: 3,
            picture: ROB,
            name: 'Robert',
            rating: '',
            review: "It's a very nice place. I'm visiting a cousin. But, b4 i left, i read all the reviews. And, idk how many i read, but ALOT!! And, everyone's reviews where ALL POSITIVE!! Except for a former employer, WHO LIED AND SAID THEY HAVE ROACHES!! IGNORE HER.",
        },
        {
            id: 4,
            picture: TARA,
            name: 'Tara',
            rating: '',
            review: "CLEAN WITH WONDERFUL STAFF❤️You don't get better care than this place! My mother in law loves the food and staff-this place is a godsend🙌",
        },
        {
            id: 5,
            picture: GAYLE,
            name: 'Gayle',
            rating: '',
            review: "Thank you for being so kind and caring. I have been here twice.",
        },
        {
            id: 6,
            picture: KING,
            name: 'Sky',
            rating: '',
            review: "This place makes u positive",
        },
    ]

    const responsive = {
        0: {
            items: 1,
            itemsFit: 'contain' 
        },
        800: {
            items: 2,
            itemsFit: 'contain'
        },
        1180: {
            items: 3,
            itemsFit: 'contain'
        },
    }


    const items = data.map((item) => (
        <div key={item.id} className="flex "  >
            <div className=" flex justify-center items-center w-screen py-5 " >
                <div className="bg-[white] h-96  md:w-max flex flex-col rounded-xl justify-center items-center " style={{boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'}}>
                    <img src={item.picture} alt={item.name} className="h-12 w-12 rounded-full" />
                    <div className="flex py-4 text-[#fec42d] text-lg">
                        <MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/><MdOutlineStar/>
                    </div>
                    <h3 className="w-96 text-xs font-bold px-5 text-center"><RiDoubleQuotesL className='text-xl text-[#3f87b9]'/>{item.review}</h3>
                    <h5 className="py-2 text-[#3f87b9] font-medium ">{item.name}</h5>
                </div>
            </div>
        </div>
    ))
    



    return (

            <div className="bg-[#fff9f6]">
                <div className="flex flex-col justify-center items-center pt-5" >
                    <h3>Testimonials</h3>
                    <h1 className="text-center px-2">What Our Patients Are Saying</h1>
                </div>
                <div className="flex justify-center items-center w-full 2xl:px-44 ">
                    <AliceCarousel
                        items={items}
                        mouseTracking
                        autoPlay
                        infinite
                        autoPlayInterval={5000}
                        animationDuration={1500}
                        responsive={responsive}
                        disableButtonsControls                    
                    />
                </div>
            </div>

    );
}

export default Testimonials;