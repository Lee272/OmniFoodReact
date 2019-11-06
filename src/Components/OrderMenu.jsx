import React from 'react';
import '../style.css';



export default class OrderMenu extends React.Component {


  render() {
    return (
      // PAGE START
      <div className="bg-gray-100 py-20">
      {/* TITLE */}
        <div>
          <h1 className="m-0 pb-6 P-underline text-center xl:text-5xl">
            Start Eating Healthy Today
          </h1>
        </div>
        {/* CARD CONTAINER */}
        <div className="sm:px-10 lg:flex lg:justify-center">
          <div className="m-4 shadow-md md:flex lg:block">
          {/* CARD TOP */}
            <div className="px-4 pt-4 bg-gray-200 rounded-lg md:w-full">
              <p className="mb-2 uppercase font-semibold text-xl">Premium</p>
              <p className="m-0 text-orange-600 text-4xl">399$
              <span className="text-xs"> /month</span></p>
              <p className="m-0 pb-4">That's Only 13.30$ per Meal</p>
            </div>
            {/* MIDDLE SECTION */}
            <div className="p-4 border-t-2 border-b-2 bg-white md:w-full md:border-0">
              <ol className="font-semibold">
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> 1 Meal Everyday</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Order 24/7</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Access to New Creations</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Free Delivery</li>
              </ol>
            </div>
            {/* CARD BOTTOM */}
            <div className="text-center bg-white md:flex md:items-center lg:block md:w-full">
              <button className=" w-40 h-12 m-2 p-2 bg-orange-500 text-white border-2 rounded-full hover:bg-orange-600 font-semibold shadow-md hover:shadow-none">
                Sign Up Now</button>
            </div>
          </div>
          {/* SECOND CARD */}
          <div className="m-4 shadow-md md:flex lg:block">
          {/* CARD TOP */}
            <div className="px-4 pt-4 bg-gray-200 rounded-lg md:w-full">
              <p className="mb-2 uppercase font-semibold text-xl">Pro</p>
              <p className="m-0 text-orange-600 text-4xl">149$
              <span className="text-xs"> /month</span></p>
              <p className="m-0 pb-4">That's Only 14.90$ per Meal</p>
            </div>
            {/* MIDDLE SECTION */}
            <div className="p-4 border-t-2 border-b-2 bg-white md:w-full md:border-0">
              <ol className="font-semibold">
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> 1 Meal 10 Days/Everyday</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Order 24/7</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Access to New Creations</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Free Delivery</li>
              </ol>
            </div>
            {/* CARD BOTTOM */}
            <div className="text-center bg-white md:flex md:items-center md:w-full lg:block">
              <button className="w-40 h-12 m-2 p-2 text-orange-600 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white font-semibold shadow-md hover:shadow-none">
                Sign Up Now</button>
            </div>
          </div>
          {/* THIRD CARD */}
          <div className="m-4 shadow-md md:flex justify-around lg:block">
          {/* CARD TOP */}
            <div className="px-4 pt-4 bg-gray-200 rounded-lg md:w-full">
              <p className="mb-2 uppercase font-semibold text-xl">Starter</p>
              <p className="m-0 text-orange-600 text-4xl">19$
              <span className="text-xs"> /month</span></p>
              <p className="pb-12 m-0"></p>
            </div>
            {/* MIDDLE SECTION */}
            <div className="p-4 border-t-2 border-b-2 bg-white md:w-full md:border-0">
              <ol className="font-semibold">
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> 1 Meal</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Order from 8am to 12pm</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8730;</span> Free Delivery</li>
                <li className="my-2"><span className="mr-2 text-orange-600">&#8855;</span> Access to New Creations</li>
              </ol>
            </div>
            {/* CARD BOTTOM */}
            <div className="text-center bg-white md:flex md:items-center lg:block md:w-full">
              <button className="w-40 h-12 m-2 p-2 text-orange-600 border-2 border-orange-400 rounded-full hover:bg-orange-400 hover:text-white font-semibold shadow-md hover:shadow-none">
                Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}