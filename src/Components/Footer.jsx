import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../style.css";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/entypo/facebook";
import { twitter } from "react-icons-kit/entypo/twitter";
import { googlePlus } from "react-icons-kit/entypo/googlePlus";
import { instagram } from "react-icons-kit/entypo/instagram";

export default class Footer extends React.Component {
  state = { ToggleSwitch: false };

  sec = () => {
    document.getElementById("secret").className = "secretOn";
    document.getElementById("test").className = "rotate-out-hor";
  };

  render() {
    return (
      <footer className="h-full bg-gray-800 text-xs">
        {/* LINKS */}
        <div className="w-full text-center" id="test">
          <ul className="m-auto flex justify-center text-gray-500">
            <li className="p-2 hover:text-white">About Us</li>
            <li className="p-2 hover:text-white">Blog</li>
            <li className="p-2 hover:text-white">Press</li>
            <li className="p-2 hover:text-white">IOS App</li>
            <li className="p-2 hover:text-white">Android App</li>
          </ul>
        </div>
        {/* COPYRIGHT */}
        <div className="text-gray-500 text-center w-full items-center">
          <p id="secret" onClick={this.sec}>
            Copyright © 2015 by Omnifood. All rights reserved
          </p>
        </div>
        {/* SOCIAL */}
        <ScrollAnimation
          offset={5000}
          initiallyVisible={true}
          animateIn="slideInLeft"
          duration={3}
          className="pr-0 flex justify-center md:pr-10 md:justify-end w-full"
        >
          <div style={{ color: "" }} className="flex p-2">
            <Icon className="facebook" size={20} icon={facebook} />
          </div>
          <div style={{ color: "" }} className="flex p-2">
            <Icon className="twitter" size={20} icon={twitter} />
          </div>
          <div style={{ color: "" }} className="flex p-2">
            <Icon className="googleplus" size={20} icon={googlePlus} />
          </div>
          <div style={{ color: "" }} className="flex p-2">
            <Icon className="instagram" size={20} icon={instagram} />
          </div>
        </ScrollAnimation>
      </footer>
    );
  }
}
