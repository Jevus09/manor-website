import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import HOSPICE from '../assets/programs/HOSPICE.jpg'
import IV from '../assets/programs/ivtherapy.jpg'
import ORTHO from '../assets/programs/ortho.jpg'
import UROLOGY from '../assets/programs/UROLOGY.jpg'
import WOUND from '../assets/programs/WOUND.jpg'
import NEUROLOGY from '../assets/programs/NEUROLOGY.jpg'


const data = [
    {
        id: 1,
        title: 'NEUROLOGY PROGRAM',
        point1: 'Neurologists consult on-site monthly',
        point2: ' Stroke rehab program',
        point3: 'Neurologists consult on-site monthly. Neurologists consult on-site monthly',
        background: NEUROLOGY,
    },
    {
        id: 2,
        title: 'WOUND CARE PROGRAM',
        point1: 'Wound Care Certified Registered Nurse on staff',
        point2: ' Weekly wound rounds with a board certified surgeon',
        point3: 'Wound Vac, Mist therapy, specialty beds, edema wrapping, and other modalities',
        background: WOUND,
    },

    {
        id: 3,
        title: 'UROLOGY PROGRAM',
        point1: 'Provides comprehensive inpatient and outpatient care, including state-of-the-art diagnostic and treatment capabilities.',
        point2: 'Urologist that rounds on-site monthly',
        point3: 'Bladder Scanner',
        background: UROLOGY,
    },

    {
        id: 4,
        title: 'HOSPICE PROGRAM',
        point1: 'Contracted inpatient saervices with Advocate Hospice',
        point2: ' Contracted with multiple Hospice providers in the area',
        point3: 'Contracted with multiple Hospice providers in the area',
        background: HOSPICE ,
    },

    {
        id: 5,
        title: 'IV THERAPY',
        point1: 'IV certified nursing staff.',
        point2: ' TPN',
        point3: 'IV therapy is widely recommended for patients in rehab because it is an extremely safe, relatively non-invasive',
        background: IV ,
    },

    {
        id: 6,
        title: 'ORTHO PROGRAM',
        point1: 'On site Physical and Occupational therapists 7 days a week',
        point2: ' We follow individual surgeon protocols',
        point3: 'Comprehensive pain management. INR machine',
        background: ORTHO ,
    },


]

const Programs = () => {
    return (
      <div className="h-full pb-20 bg-[#f5efed]">
        <h1 className="flex justify-center text-xl md:text-3xl py-10 md:py-24">OUR REHABILITATION PROGRAMS</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center px-3 gap-4  "> {/* Updated line */}
          {data.map((item) => (
            <div key={item.id} className="place-content-center w-max "> {/* Updated line */}
              <a href='/#' className='no-underline' ><Card className="group program-card" style={{ height: '16rem', width: '18rem' }}>
                {/*  Cover of Card */}
                <Card.Body
                  className="bg-center bg-cover flex flex-col justify-center items-center md:group-hover:hidden"
                  style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${item.background})` }}
                >
                  <Card.Text>
                    <p className="text-sm md:text-base text-center font-bold text-white">{item.title}</p>
                  </Card.Text>
                </Card.Body>
                {/*  Inside of Card */}
                <Card.Body className="hidden md:group-hover:block bg-[#31b5aa] text-center object-cover" >
                  <Card.Text className='inside-text text-xs md:text-base text-center font-bold text-white' >
                    <ListGroup.Item>{item.point1}</ListGroup.Item>
                    <ListGroup.Item>{item.point2}</ListGroup.Item>
                    <ListGroup.Item>{item.point3}</ListGroup.Item>
                  </Card.Text>
                </Card.Body>
              </Card>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Programs;