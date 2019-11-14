import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../style.css';

export default class ContactForm extends React.Component {

state = { isChecked: false };
state = { name: "", email: "", registrationErrors: ""  };

toggleCheckBox = () => {
  this.setState({ isChecked: !this.state.isChecked });
}

eventHandle = (event) => {
  this.setState({ name:event.target.name, email:event.target.email })
  console.log(this.name)
}

  render(){
    console.log(this.state)
    return(
      <div className="py-10" id="SignUp">
      {/* HEADER */}
        <div>
          <h1 className="P-underline text-center text-3xl md:text-4xl">We are Happy to Hear From You</h1>
        </div>
        {/* CONTACT FORM CONTAINER */}
        <form className="w-3/4 mx-auto">
        {/* NAME CONTAINER */}
          <div className="">
          {/* NAME & LABEL */}
            <div className="md:flex items-center">
              <div className="md:mr-4">
                <label className="m-0 text-base font-semibold">
                  Name:
                </label>
              </div>
              {/* FIRSTNAME INPUT */}
              <div className="my-3 md:w-2/3">
                <input 
                  name="name"
                  // value={  }
                  className="p-1 w-full border-2 border-gray-300 focus:outline-none focus:border-gray-400" 
                  placeholder="Your Name" />
              </div>
            </div>
            {/* EMAIL LABEL */}
            <div className="md:flex md:items-center">
              <div className="my-3 md:mr-5">
                <label className="m-0 text-base font-semibold">
                  Email:
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="email"
                  // name="email" value={this.state.email}
                  // onChange={ this.eventChange }
                  className="p-1 w-full border-2 focus:outline-none focus:border-gray-400"
                  placeholder="Your Email Address" required />
              </div>
            </div>
            {/* FIND US */}
            <div className="md:flex md:items-center">
              <div className="my-3 md:mr-5">
                <label className="m-0 text-base font-semibold">
                  How did you find us?
                </label>
              </div>
              <div>
                <select className="block font-semibold w-full p-2 bg-gray-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Friends</option>
                  <option>Online</option>
                  <option>Search</option>
                </select>
              </div>
            </div>
            {/* NEWSLETTER */}
            <div className="mb-4 mt-4 flex items-center">
              <label className="m-0 text-base font-semibold">
                Newsletter
              </label>
              <div className="ml-3 flex items-center">
                <input type="checkbox" id="newsletterAccept" onChange={this.toggleCheckBox} />
                {this.state.isChecked &&
                  <div className="ml-2 p-1 bg-white rounded-lg shadow-md shadow">
                    <p className="ml-2 mb-0" id="Test" name="test" value="test">Thank you for Subscribing</p>
                  </div>
                }
                {/* <p className={this.state.isChecked ? '' : 'hidden'} id="Test" name="test" value="test">Thank you for Subscribing</p> */}

              </div>
            </div>
            {/* CALL US */}
            <div className="md:flex">
              <label className="m-0 text-sm font-semibold md:w-1/4">
                Drop Us A Line
              </label>
              <div className="h-full w-full">
                <input className="w-full h-40 mt-2 border-gray-400 border-2 text-center" type="textarea" placeholder="Your Message" />
              </div>
            </div>
            {/* SUBMIT BUTTON */}
            <div className="m-3 text-center">
              <button onChange={ this.eventHandle }
                className=" w-25 h-10 bg-orange-500 border-2 border-orange-400 rounded-full text-white font-semibold shadow-md">
                Send
              </button>
            </div>
          </div>
        </form>

<ScrollAnimation
  initiallyVisible={true}
>
  <button className="text-white bg-black border-2 rounded-full">
    HELLO
  </button>
</ScrollAnimation>

      </div>
    )
  }
}