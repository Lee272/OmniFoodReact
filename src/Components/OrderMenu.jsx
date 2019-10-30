import React from 'react';
import '../style.css';



export default class OrderMenu extends React.Component {


  render() {
    return (
      // PAGE START
      <div>
      <div className="bg-gray-100">
      {/* TITLE */}
        <div>
          <h1 className="P-underline text-center">
            Start Eating Healthy Today
          </h1>
        </div>
        {/* CARD CONTAINER */}
        <div className="m-4 shadow-md rounded-lg">
        {/* CARD TOP */}
          <div className="px-4 pt-4">
            <p className="mb-4 uppercase font-semibold">Premium</p>
            <p className="m-0 text-orange-600">399 $/month</p>
            <p>That's Only 13.30$ per Meal</p>
          </div>
          {/* MIDDLE SECTION */}
          <div className="p-4 border-t-2 border-b-2">
            <ol>
              <li>1 Meal Everyday</li>
              <li>Order 24/7</li>
              <li>Access to New Creations</li>
              <li>Free Delivery</li>
            </ol>
          </div>
          {/* CARD BOTTOM */}
          <div className="flex items-center justify-center">
            <button className="w-32 h-10 m-2 p-2 bg-orange-500 text-white border-2 rounded-full hover:bg-orange-600">Sign Up Now</button>
          </div>
        </div>
      </div>
</div>
    )
  }
}