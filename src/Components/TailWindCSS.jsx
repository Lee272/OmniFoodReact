import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Image from 'react-bootstrap/Image';
import PhoneImg from '../img/app-iPhone.png';
import GooglePlay from '../img/download-app-android.png';
import ApplePlay from '../img/download-app.svg';


export default class TailWindCSS extends React.Component{


  render(){
    return(

      <section className="bg-gray-100 py-10" id="How">
        <div>
        {/* HEADER */}
          <div>
            <h1 className="text-center P-underline mb-10 text-3xl sm:text-4xl lg:text-5xl">
              How It Works - Simple As 1, 2, 3
            </h1>
          </div>
        {/* MAIN BODY */}
        <div className="md:flex md:items-center md:justify-center">
          <div className="flex justify-center md:w-1/3">
          <ScrollAnimation
            
            animateOnce={true}
            animateIn="slideInUp">
            <Image className="w-48 my-4" id="slide"
              src={PhoneImg}
            />
          </ScrollAnimation>
          </div>
          {/* INFORMATION POINTS - Container */}
          <div className="md:w-2/3">
            {/* Section One */}
            <div className="m-2 flex items-center">
              <div className="h-12 w-12 ml-4 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold">
                1
              </div>
              <p className="mb-0 ml-4 md:ml-0">
                Choose the subscription plan that best fits your needs and sign up today
              </p>
            </div>
            {/* Section Two */}
            <div className="m-2 flex items-center">
              <div className="h-12 w-12 ml-4 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold">
                2
              </div>
              <p className="mb-0 ml-4">
                Order your delicious meal using our mobile app or website. Or you can even call us!
              </p>
            </div>
            {/* Section Three */}
            <div className="m-2 flex items-center">
              <div className="h-12 w-12 ml-4 border-2 border-orange-600 rounded-full flex items-center justify-center text-orange-600 text-2xl font-bold">
                3
              </div>
              <p className="mb-0 ml-4">
                Enjoy your meal after less than 20 minutes. See you the next time!
              </p>
            </div>
            {/* DEVICE BUTTONS */}
            <div className="flex items-center justify-center sm:pb-20">
              <a href="#StartPoint" className="p-1">
              <img src={GooglePlay} alt="unit01" className="w-auto h-12 m-2" />
              </a>
              <a href="#NextStop" className="p-1">
              <img src={ApplePlay} alt="unit02" className="w-auto h-12 m-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      </section>







//       <section className="HowItWorks">
//         <h1 className="text-center P-underline mb-10">HOW IT WORKS — SIMPLE AS 1, 2, 3</h1>
//         <div className="w-100 row">
//           <div className="col-md-6 col-sm-12">
//             <Image src={PhoneImg} className="w-48 ml-auto mr-20" />
//           </div>
// {/* Second Column */}
//           <div className='col-md-6 col-sm-12 p-10 flex flex-column justify-around'>
// {/* First Option One */}
//             <div className="">
//               <div className="oneNumber">1</div>
//               <p className="ml-3 inline-block">Choose the subscription plan that best fits your needs and sign up today.</p>
//             </div>
// {/* Second option Two */}
//             <div>
//               <div className="oneNumber">2</div>
//               <p className="ml-3 inline-block">Order your delicious meal using our mobile app or website. Or you can even call us!</p>
//             </div>
// {/* Third Option Three */}
//             <div>
//               <div className="oneNumber">3</div>
//               <p className="ml-3 inline-block">Enjoy your meal after less than 20 minutes. See you the next time!</p>
//             </div>
// {/* Button Links */}
//             <div className="flex mx-10">
//               <a href="#StartPoint" className="p-1">
//                 <img src={GooglePlay} alt="unit01" className="w-auto h-75" />
//               </a>
//               <a href="#NextStop" className="p-1">
//                 <img src={ApplePlay} alt="unit02" className="w-auto h-75" />
//               </a>
//             </div>
//             <div className="flex h-12 w-12  border-2 rounded-full border-orange-600 text-orange-600 font-bold text-xl items-center justify-center">1</div>
//           </div>
//         </div>
//         </section>
    )
  }
}