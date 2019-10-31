import React from 'react';
import '../style.css';
import { Icon } from 'react-icons-kit';
import {facebook} from 'react-icons-kit/entypo/facebook';
import {twitter} from 'react-icons-kit/entypo/twitter';
import {googlePlus} from 'react-icons-kit/entypo/googlePlus';
import {instagram} from 'react-icons-kit/entypo/instagram';


export default class Footer extends React.Component {


  render (){

    return(
      <footer className="h-full bg-gray-800 text-xs">
      {/* LINKS */}
        <div className="">
          <ul className="m-auto flex justify-center text-gray-500">
            <li className="p-2 hover:text-white">About Us</li>
            <li className="p-2 hover:text-white">Blog</li>
            <li className="p-2 hover:text-white">Press</li>
            <li className="p-2 hover:text-white">IOS App</li>
            <li className="p-2 hover:text-white">Android App</li>
          </ul>
        </div>
        {/* COPYRIGHT */}
        <div className="text-gray-500 text-center">
          <p>
            Copyright © 2015 by Omnifood. All rights reserved
          </p>
        </div>
        {/* SOCIAL */}
        <div className="flex justify-center">
          <div style={{ color: '#3b5998' }} className="flex p-2">
            <Icon size={20} icon={facebook} />
          </div>
          <div style={{ color: '#38A1F3' }} className="flex p-2">
            <Icon size={20} icon={twitter} />
          </div>
          <div style={{ color: '#DD4B39' }} className="flex p-2">
            <Icon size={20} icon={googlePlus} />
          </div>
          <div style={{ color: '#8a3ab9' }} className="flex p-2">
            <Icon size={20} icon={instagram} />
          </div>
        </div>
      </footer>
    )
  }
}