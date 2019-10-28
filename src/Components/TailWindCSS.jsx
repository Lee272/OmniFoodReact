import React from 'react';
import Image from 'react-bootstrap/Image';
import PhoneImg from '../img/app-iPhone.png';
import GooglePlay from '../img/download-app-android.png';
import ApplePlay from '../img/download-app.svg';


export default class TailWindCSS extends React.Component{


  render(){
    return(
      <section className="HowItWorks">
        <h1 className="text-center P-underline mb-10">HOW IT WORKS — SIMPLE AS 1, 2, 3</h1>
        <div className="w-100 row">
          <div className="col-md-6 col-sm-12">
            <Image src={PhoneImg} className="w-48 ml-auto mr-20" />
          </div>
{/* Second Column */}
          <div className='col-md-6 col-sm-12 p-10 flex flex-column justify-around'>
{/* First Option One */}
            <div className="">
              <div className="oneNumber">1</div>
              <p className="ml-3 inline-block">Choose the subscription plan that best fits your needs and sign up today.</p>
            </div>
{/* Second option Two */}
            <div>
              <div className="oneNumber">2</div>
              <p className="ml-3 inline-block">Order your delicious meal using our mobile app or website. Or you can even call us!</p>
            </div>
{/* Third Option Three */}
            <div>
              <div className="oneNumber">3</div>
              <p className="ml-3 inline-block">Enjoy your meal after less than 20 minutes. See you the next time!</p>
            </div>
{/* Button Links */}
            <div className="flex mx-10">
              <a href="#StartPoint" className="p-1">
                <img src={GooglePlay} alt="unit01" className="w-auto h-75" />
              </a>
              <a href="#NextStop" className="p-1">
                <img src={ApplePlay} alt="unit02" className="w-auto h-75" />
              </a>
            </div>
          </div>
        </div>
        </section>
    )
  }
}