import React from 'react';
// import BgTestimonials from '../img/back-customers.jpg';
import '../style.css';
import User1 from '../img/customer-1.jpg';
import User2 from '../img/customer-2.jpg';
import User3 from '../img/customer-3.jpg';


export default class Testimonials extends React.Component {



  render() {

    return(
      <div className="backgroundT py-20">
      {/* HEADER */}
          <div className="">
            <h1 className="my-4 P-underline text-center text-3xl text-white">
              Our Customers Cant Live Without Us
            </h1>
          </div>
          {/* TESTIMONIALS */}
          <div className="text-justify md:flex md:items-baseline lg:mx-8">
            {/* TESTIMONIAL ONE */}
            <div className="p-2 text-white md:w-1/3">
              <blockquote>
                <br />
                <p>
                  Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
                </p>
              </blockquote>
              <div className="m-3 flex items-center">
                <img className="w-12 h-12 rounded-full"
                  src={User1} alt="User1" />
                  <p className="m-0 ml-2">Alberto Duncan</p>
              </div>
            </div>
          {/* TESTIMONIAL Two */}
          <div className="p-2 text-white md:w-1/3">
            <blockquote>
              <br />
              <p>
                Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
              </p>
            </blockquote>
            <div className="m-3 flex items-center">
                <img className="w-12 h-12 rounded-full"
                  src={User2} alt="User1" />
                  <p className="m-0 ml-2">Joana Silva</p>
              </div>
          </div>
          {/* TESTIMONIAL THREE */}
          <div className="p-2 text-white md:w-1/3">
            <blockquote>
              <br />
              <p>
                I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
              </p>
            </blockquote>
            <div className="m-3 flex items-center">
                <img className="w-12 h-12 rounded-full"
                  src={User3} alt="User1" />
                  <p className="m-0 ml-2">Milton Chapman</p>
              </div>
          </div>
        </div>
    </div>
    )
  }
}