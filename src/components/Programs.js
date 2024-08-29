import React from 'react';
import { Card } from 'react-bootstrap';
import PULMO from '../assets/programs/pulmonary.webp'
import IV from '../assets/programs/ivtherapy.webp'
import ORTHO from '../assets/programs/ortho.webp'
import UROLOGY from '../assets/programs/uro.webp'
import WOUND from '../assets/programs/wound.webp'
import NEUROLOGY from '../assets/programs/neuro.webp'



const data = [
    {
        id: 1,
        title: 'NEUROLOGY PROGRAM',
        background: NEUROLOGY,
    },
    {
        id: 2,
        title: 'WOUND CARE PROGRAM',
        background: WOUND,
    },

    {
        id: 3,
        title: 'UROLOGY PROGRAM',
        background: UROLOGY,
    },

    {
        id: 4,
        title: 'PULMONARY REHAB',
        background: PULMO ,
    },

    {
        id: 5,
        title: 'IV THERAPY',
        background: IV ,
    },

    {
        id: 6,
        title: 'ORTHO PROGRAM',
        background: ORTHO ,
    },


]

const Programs = () => {
  return (
    <div className="h-full pb-20 bg-[#f5efed]">
      <h1 className="flex justify-center text-xl md:text-4xl py-10 md:py-24">Our Rehabilitation Programs</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center 2xl:px-72 gap-4 ">
        {data.map((item) => (
          <div key={item.id} className=" place-content-center w-max">
            <div >
              <Card className="program-card  " style={{ height: '16rem', width: '18rem' }}>
                {/* Cover of Card */}
                <Card.Body
                  className="bg-center bg-cover flex flex-col justify-center items-center"
                  style={{ backgroundImage: `linear-gradient(#00000085, #00000085), url(${item.background})` }}
                >
                  <Card.Text>
                    <p className="text-sm md:text-base text-center font-bold text-white">{item.title}</p>
                  </Card.Text>
                </Card.Body>
            
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;